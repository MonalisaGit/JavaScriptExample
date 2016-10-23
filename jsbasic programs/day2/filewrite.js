var fs = require('fs-extra');
var file = './trash/content.txt';

var data="i am in banglore";
 
fs.outputFile(file,data, function(err) {
  console.log(err); //null 
  console.log("i am in output file");

  
})

  
