 

var i,j=0;
var str=[];

var readlineSync=require('readline_sync');

str=readlineSync.question("enter the string");
console.log(str);



   i=0;
   j = strlen(str) - 1;
   var temp;

 while (i < j) {
      temp = str[i];
      str[i] = str[j];
      str[j] = temp;
      i++;
      j--;
   }
   console.log(temp);