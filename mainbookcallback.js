var bookClass = require("./book").Book
var bookObj = new bookClass("nodejs",2016);

bookObj.setTitle(5,bcallback);
bookObj.setPubYear(10,bcallback);

bookObj.getTitle();
bookObj.getPubYear();
function bcallback(data){
	console.log(data);
}


