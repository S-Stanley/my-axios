const http = require('http');

const port = 8080;

http.createServer(function(request: any, response: any) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write('Hello world');
    response.end();
}).listen(port);