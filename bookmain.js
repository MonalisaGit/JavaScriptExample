var bookClass = require("./book").Book
var bookObj = new bookClass("nodejs",2016);

bookObj.setTitle("myjava");
bookObj.setPubYear(1993);

bookObj.getTitle();
bookObj.getPubYear();

