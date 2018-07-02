var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket){
  //connection listener...
  //console.log('client connected...');

  socket.end(strftime('%Y-%m-%d %H:%M\n'));
});

server.listen(process.argv[2]);
