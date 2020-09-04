var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('I love my daughter');
}).listen(8080);