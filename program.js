var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data){
  if(err){
    return console.log(err);
  }
  var arr = data.split('\n');

  console.log(arr.length - 1);
});
