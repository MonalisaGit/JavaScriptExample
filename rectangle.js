var rectangle=function(len,wid){
	this.length=len;
	this.width=wid;
	//console.log(this.length*this.width);
}

rectangle.prototype.insert =function(l,w){
	this.length=l;
	this.width=w;
}

rectangle.prototype.calculateArea =function (result){
	this.area=(this.length * this.width);
	result(this.area);
}

exports.rectangle=rectangle;