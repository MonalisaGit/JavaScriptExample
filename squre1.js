var squre1 =function(){//this is constructor

}


squre1.prototype.area = function(side) 
	// body...
	{//here area is the method and prototype is used for inheritance purpose,callback is one type of variabe here
	var sqrArea = (side) * (side);//area of the square

	//console.log("Area  = " + sqrArea);
	console.log("Area  = " + sqrArea);
}

squre1.prototype.circumtance = function(side){
	var sqrCircumtance = 4 * side;

	//console.log("circumtances  = " + sqrCircumtance);
	console.log("circumtances  = " + sqrCircumtance);
}


exports.squre1 = squre1;