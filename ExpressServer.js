const { response } = require('express');
const express = require('express');
const { request } = require('http');

const app = express();

const port  = 3000;

app.get('/',(Request,Response) => {
    Response.send('Hello World')
})

app.listen(port, () =>{
    console.log(`Example of app litsening on port:${port}`)
})