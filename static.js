module.exports = function(request, response){
            const http = require('http');
            const fs = require('fs');
            const path = require('path')

            let filename = request.url


            console.log("we are now using a module!");
            
            console.log('Request', request.url);
            if (request.url != null) {
                if(request.url === '/'){
                    fs.readFile('views/index.html', 'utf8', function (errors, contents) {
                        response.writeHead(200, {'Content-type': 'text/html'});
                        response.write(contents); 
                        response.end();
                    });
                } else if(request.url === '/favicon.ico') {
                    fs.readFile('./cat1.jpg', function(errors, contents) {
                        response.writeHead(200, {'Content-Type': 'text/jpg'});
                        response.write(contents);
                        response.end();
                    });
                } 
                else {
                    fs.readFile(`views/${filename}.html`, 'utf8', function (errors, contents) {
                        response.writeHead(200, {'Content-type': 'text/html'});
                        response.write(contents);
                        response.end();
                    });
                }
            } else {
                response.writeHead(404);
                response.end('File not found!!!');
            }
            //return response;
        }