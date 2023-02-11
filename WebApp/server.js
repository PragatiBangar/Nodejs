var fs = require('fs');
var http = require('http');

var server = http.createServer(
    (request, response) => {
        fs.readFile("index.html",
                     (err,data) =>{
                        if(err){
                            console.log(err);
                            response.writeHead(404,{'content-Type' : 'text/html'});
                        }
                        else{
                            response.writeHead(200,{'content-Type' : 'text/html'});
                            response.write(data.toString());
                            
                        }
                        response.end();

                     })
    });

    server.listen(9000);
    console.log("http server listening on port no. 9000");