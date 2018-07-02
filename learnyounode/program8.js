var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(res){

  res.setEncoding('utf8');

  res.pipe(bl(function(err, data){
    if(err){
      return console.error(err);
    }

    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));

}).on('error', function(e){
  console.error('Error!', e.message);
});
