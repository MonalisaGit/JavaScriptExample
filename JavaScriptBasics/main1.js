var importclass=require("./exportssqr").myclass;
var myobj =new importclass(5);
myobj.squre(5,function(res){
	console.log(res+ "in callback");
})
