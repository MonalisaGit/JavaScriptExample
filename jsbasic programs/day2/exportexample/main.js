var Exportexampleclass =require('./exportexample11').exportexample;
var myobject={
			"username":"krishna",
			"password":12345
			
			}

var exportexampleObj =new Exportexampleclass(myobject);

exportexampleObj.logindetails(function(result){

	console.log("i am in main.js file "+result)

});
