var http = require('http');
var bl = require('bl');

var results = [];

function httpGets(i){
  http.get(process.argv[i], function(res){
    res.pipe(bl(function(err, data){
      if(err){
        return console.error(err);
      }

      results[i - 2] = data.toString();

      if(i === 4){
        for(var j = 0; j < 3; j++){
          console.log(results[j]);
        }
      }
    }));

  });
}

for (var i = 2; i < process.argv.length; i++){
  httpGets(i);
}
