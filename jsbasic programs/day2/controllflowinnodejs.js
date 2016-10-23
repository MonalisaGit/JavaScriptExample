var fs = require('fs-extra');
var file = './trash/content.txt';
 
fs.outputFile(file, 'hello!', function(err) {
  console.log(err); //null 
  console.log("i am in output file");

  
})

  
 fs.readFile(file, 'utf8', function(err, data) {
    console.log(data); //hello! 
    console.log("i am in readfile")
  })