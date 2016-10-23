

var Book = function(titl,year){
	this.title=titl;
	this.pubYear=year;
}


	Book.prototype.setTitle = function(tl){
	//console.log("TITLE ="+ this.title);
	this.title=tl;

}


Book.prototype.setPubYear = function(pyear){
	//console.log("publicity year="+this.pubYear);
	this.pubYear=pyear;
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
