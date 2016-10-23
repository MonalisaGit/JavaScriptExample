var sqrClass = require("./squre").squre
var sqrObj = new sqrClass(5);

 sqrObj.area(sqrCallback);
 sqrObj.circumtance(sqrCallback);


 function sqrCallback(data) {
 	console.log(data);

}

