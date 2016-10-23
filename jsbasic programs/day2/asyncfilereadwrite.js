var async=require("async");
var fs = require('fs-extra');
var file = './trash/content.txt';

async.series([

    function(callbackone){

    	fs.outputFile(file, 'hello!', function(err) {
  			console.log(err); //null 
  			console.log("i am in output file");
  			callbackone();
		})
    	
    },
    function(callbacktwo){ 

    	fs.readFile(file, 'utf8', function(err, data) {
   			 console.log(data); //hello! 
   			 console.log("i am in readfile")
   			 callbacktwo();
  		})
    	
    }
],function(err,result){
	console.log("end of asyn")
});




 


  
 