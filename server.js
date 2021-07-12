const http = require('http');
const host = 'localhost';
const fs = require('fs').promises;
const port = 8080;

/*Send a Json object
const requestListerner = function(request, response){
    response.setHead("Content-Type", "application/json");//Set the type of content to be returned to HTML
    response.write(JSON.stringify([1,2,3])); //This is how we return a status code
    response.end(); //This writes a HTTP resonse back to the client who requested it.   
}*/

/** Sending HTML
 *  const requestListerner = function(request, response){
        response.setHead("Content-Type","text/html");//Set the type of content to be returned to HTML
        response.writeHead(200); //This is how we return a status code
        response.end(`<html><body><h1>This is HTML</h1></body></html>`); //This writes a HTTP resonse back to the client who requested it.   
}
 */

/** Sending Normal Text
 *  const requestListener = function(request, response){
         response.writeHead(200); //This is how we return a status code
        response.end("My first server!"); //This writes a HTTP response back to the client who requested it.
}
 */

// Create a request listener that will render a HTML page 
//Send HTML pages to be rendered
const requestListener = function(request,response){
    fs.readFile(__dirname + "/index.html")
    .then( constents => {response.setHeader('Constent-Type','text/HTML')
    response.writeHead(200);
    response.end(constents);})
    .catch(err => {
        response.writeHead(500);
        response.end("NOt working");//Usuall render a HTML error page
        return;
    })
}

const server = http.createServer(requestListener);

server.listen(port,host, ()=>{
    console.log(`Server is running on http://${port} : ${host}`);
});
