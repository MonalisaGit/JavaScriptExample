
//doubt

var c=0;
 var m=0;
 var n=0;
 var array3=[];


var readlinesync=require('readline-sync');


var size1=readlinesync.question("please enter the array size1");
  var array1=[];
	for(var m=0;m<size1;m++){
		array1[m]=readlinesync.question("please enter the array elements");
	}
console.log("Array elements u entred is::"+array1);


var size2=readlinesync.question("please enter the array size2");
var array2=[];
for(var n=0;n<size1;n++){
		array2[n]=readlinesync.question("please enter the array elements");
	}
	console.log("Array elements u entred is::"+array2);

 
while((m<size1) && (n<size2))
{
	if(array1[m]<=array2[n])
		 array3[c]=array1[m++];
	else
		array3[c]=array2[n++]
	c++;
}
while(m<size1)
{
	array3[c]=array1[m];
	c++;
	m++;
}
while(n<size2){
	array3[c]=array2[n];
	c++;
	n++;
}

console.log("merged array is:");
for(var i=0;i<=c-1;i++){
	console.log(array3[i]);
}
	