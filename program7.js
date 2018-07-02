var http = require('http');

http.get(process.argv[2], function(res){
    res.setEncoding('utf8');

    res.on('data', function(chunk){
      console.log(chunk);
    });

    res.on('error', function(e){
      console.error('Error!', e);
    });
}).on('error', function(e){
  console.error('Error!', e);
});
