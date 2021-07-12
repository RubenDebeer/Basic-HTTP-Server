const http = require('http');
const host = 'localhost';
const port = 8080;


const books = JSON.stringify([{title:"The Alchemist", author: "Paulo Coelho", year:1988},
                             {title:"The Prophet", author: "Kahlil Gibran", year:1928}]);

const authers = JSON.stringify([{name:"Paulo Coelho",countryOfBirth:"Brazil",yearOfBirth:1947},
                                {name:"Kahlil Gibran",countryOfBirth:"Lebanon",yearOfBirth:1883}]);


const requestListerner = (Request,Response) =>{
    Response.setHeader("Content-Type", "application/json")

    //Depending on the URL path we want to return the right object.
    switch (Request.url) {
        case '/books': Response.writeHead(200)
            Response.end(books);           
            break;
        case '/authers': Response.writeHead(200)
            Response.end(authers);           
            break;
    
        default:
            Response.writeHead(404)
            Response.end(JSON.stringify({error: "Recourse not found"}))
            break;
    }
}
const server = http.createServer(requestListerner);

server.listen(port,host, ()=>{
    console.log(`Server is running on http://${port} : ${host}`);
});
