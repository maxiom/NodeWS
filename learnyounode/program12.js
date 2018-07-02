var http = require('http');
//var fs = require('fs');
var map = require('through2-map');

var server = http.createServer(function(req, res){
  var body = [];

  req.on('data', function(data){
    body.push(data);
  });

  req.on('end', function(){
    //body = Buffer.concat(body).toString();
    //res.end(body.toUpperCase());
  });

  if(req.method !== 'POST'){
    return res.end('Send me a POST\n');
  }

  req.pipe(map(function(chunk){
    return chunk.toString().toUpperCase();
  })).pipe(res);
  
});

server.listen(process.argv[2]);
