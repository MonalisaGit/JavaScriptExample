var myfunction=function(callback1){
	//console.log(callback);
	var x=5;
	var y=6;
	var z=x+y;
	//console.log(x);
	//console.log(z);
	callback1(z);
}


myfunction(function(result){
	//var a=20;
	//var name="bang";
	console.log(result);

});