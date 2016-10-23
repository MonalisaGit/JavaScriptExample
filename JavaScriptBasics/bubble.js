//var k;
var a=[5,3,8,1,4,7];
var len=a.length;

for(var i=0;i<len;i++)
{

	for(var j=0;j<len-i;j++)
	{
		if(a[j]>a[j+1])
		{
			var k=a[j];
			a[j]=a[j+1];
			a[j+1]=k;


		}
	}
}


for(var i=0;i<len;i++){
	console.log(a[i]);
}
