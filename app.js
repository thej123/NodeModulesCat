// http server
const http = require('http');
const fs = require('fs');
// the file below is the file you need to create for this assignment.
// NOTE!!!  The '.' in the filepath below just refers to the location of the current file, in this case
// the file is app.js.  Thus the path './static.js' just refers to a file called static.js
console.log("before static");
var static_contents = require('./static');
console.log("after invokation");
//
//creating a server
server = http.createServer(function (request, response){
    console.log("inside server");    
  static_contents(request, response);
  console.log("after responcse");
  //this will serve all static files automatically
});
server.listen(8000);
console.log("Running in localhost at port 8000");
