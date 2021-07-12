const http = require('http');
const host = 'localhost';
const port = 8000;

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

//Send HTML pages to be rendered


const server = http.createServer(requestListerner());

server.listen(port,host, ()=>{
    console.log(`Server is running on http://${port} : ${host}`);
});
