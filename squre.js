var squre =function(aSide){//this is constructor
	this.side = aSide;
	//this.testvar = "Hello";

}


squre.prototype.area = function(callback){//here area is the method and prototype is used for inheritance purpose,callback is one type of variabe here
	var sqrArea = (this.side) * (this.side);//area of the square

	callback("Area = " + sqrArea);
}

squre.prototype.circumtance = function(callback){
	var sqrCircumtance = 4 * this.side;

	callback("Circumtance = " + sqrCircumtance);
}

exports.squre = squre;