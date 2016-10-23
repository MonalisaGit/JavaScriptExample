var readlineSync=require('readline-sync');
//var base=readlineSync.question("enter the base\n");
var p=readlineSync.question("enter the principal ammount\n");
var t=readlineSync.question("enter the time\n");
var r=readlineSync.question("enter the rate of interest\n");
var simpleinterest=(p*t*r)/100;
console.log("simple interest is"+simpleinterest);
