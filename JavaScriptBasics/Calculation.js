var calculation=function(){

}

calculation.prototype.factorial=function(n,result){
	this.n=n;
	var fact=1;
	console.log(this.n+"...");
	for(var i =(n-1); i > 1; i--){
		
		fact=fact*(this.i);
	}

	result("factorial is" +fact);
}


exports.calculation=calculation;
