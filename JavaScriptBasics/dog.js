var dog = function(brd, ag, clr){//this is constructor
	this.breed = brd;
	this.age = ag;
	this.color = clr;

}


dog.prototype.hungry = function(){
	console.log("Hungrrrrrry  " + this.breed);
}

dog.prototype.barcking = function(){
	console.log("barckkkkkkking  " + this.age);
}

dog.prototype.sleeping = function(){
	console.log("sleeppppppping   " + this.color);
}


exports.dog = dog;