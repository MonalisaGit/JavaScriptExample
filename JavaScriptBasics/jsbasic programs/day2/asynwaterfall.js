var async=require("async");

async.waterfall([
  function(callback){
    callback(null, 'one', 'two');
  },
  function(arg1, arg2, callback){
    console.log("second function "+arg1+"::"+arg2)
    callback(null, 'three');
  },
  function(arg1, callback){
    // arg1 now equals 'three' 
    console.log("third function "+arg1)
    callback(null, 'done');
  }
], function (err, result) {
  // result now equals 'done' 
  console.log("end of water fall");
});