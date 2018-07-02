var fs = require('fs');
var path = require('path');

var ext = '.' + process.argv[3];
/*
* path <string>
* options <Object | string>
* callback <function>
*/
fs.readdir(process.argv[2], 'utf8', function(err, files){
  if(err){
    return console.log(err);
  }

  for(var i = 0; i < files.length; i++){
    if(path.extname(files[i]) === ext){
      console.log(files[i]);
    }
  }
});
