var filterFn = require('./program6-1.js');

filterFn(process.argv[2], process.argv[3], callback);

function callback(err, data){
  if(err){
    console.error("Error!", err);
  }

  for(var i = 0; i < data.length; i++){
      console.log(data[i]);
  }
}
