
var readlineSync=require('readline-sync');

var base=readlineSync.question("enter the base\n");
var hight=readlineSync.question("enter the hight\n");
var area=1/2*base*hight;
console.log("area of the triangle is" +area);
