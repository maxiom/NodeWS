var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
  var q = url.parse(req.url, true);
  var d = new Date(q.query.iso);  

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(q.pathname === '/api/unixtime' ? unixtime(d) : parsetime(d)));

});

server.listen(process.argv[2]);

function parsetime (time){
  return {
    'hour': time.getHours(),
    'minute': time.getMinutes(),
    'second': time.getSeconds()
  };
}

function unixtime (time){
  return {'unixtime': time.getTime()};
}
