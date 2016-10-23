
//doubt


var fs = require('fs-extra')
 
var file = './file.txt'
 
fs.createFile(file, function(err) {
  console.log(err); //null 
  //file has now been created, including the directory it is to be placed in 
})