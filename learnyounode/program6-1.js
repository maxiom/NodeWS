var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){
  ext = '.' + ext;

  fs.readdir(dir, 'utf8', function(err, files){
    if(err){
      return callback(err);
    }

    files = files.filter(function(file){
      return path.extname(file) === ext;
    });

    callback(null, files);
  });
};
