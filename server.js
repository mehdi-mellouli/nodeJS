const http = require ('http');
const fs = require ('fs');
const port = 3000;

const server = http.createServer(function(req,res){
res.writeHead(200,{'content-type':'text/html'})
res.end('<h1>Hello Node!!!!</h1>\n')
})
server.listen(port,function(err){
    if (err){
        console.log('something went wrong',err)
    } else {
        console.log('server listening on port ' + port)
    }
})















