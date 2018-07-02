var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  var rs = fs.createReadStream(process.argv[3]);

  res.writeHead(200, {'Content-Type': 'text/html'});
  rs.on('open', function(){
    rs.pipe(res);
  });

  rs.on('error', function(err){
    res.end(err);
  });
});

server.listen(process.argv[2]);
