var async=require("async");

async.series([
    function(callbackone){
    	console.log("FIRST");
    	callbackone();
    },
    function(callbacktwo){ 
    	console.log("second");
    	callbacktwo();
    }
],function(err){
	console.log("end of async series");
});