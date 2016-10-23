var Book = function(titl,year){
	this.title=titl;
	this.pubYear=year;
}


	Book.prototype.setTitle = function(tl,callback){
	//console.log("TITLE ="+ this.title);
	this.title=tl;
	callback("title is ="+this.title);

}


Book.prototype.setPubYear = function(pyear,callback){
	//console.log("publicity year="+this.pubYear);
	this.pubYear=pyear;
	callback("year = " + this.pubYear);
}

Book.prototype.getTitle = function(){
	console.log("title is"+this.title);
	return this.title;
}


Book.prototype.getPubYear = function(){
	console.log("year is"+this.pubYear);
	return this.pubYear;
}

exports.Book = Book;
