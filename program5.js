var fs = require('fs');

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
    var extension = files[i].split('.')[1];
    if(extension == process.argv[3]){
      console.log(files[i]);
    }
  }
});
