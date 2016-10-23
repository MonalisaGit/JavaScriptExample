var k,min;
var a=[12,45,32,789,76,43,890];
var len=a.length;
for(var pass=0;pass<len-1;pass++)
{
	min=pass;//assume pass is the minimum index
	for(var j=pass+1;j<len;j++)
	{
		if(a[min]>a[j])
			min=j;
	}
	if(min!=pass)
	{
		k=a[pass]
		a[pass]=a[min]
		a[min]=k;
	}
}
for(var i=0;i<len;i++){
	console.log(a[i]);
}
