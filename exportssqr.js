var myfirstconstructor=function(x){
	this.x1=x;

}

myfirstconstructor.prototype.squre=function(z,mycallback){
	var result=(this.x1)*z;
	mycallback(result);
}
exports.myclass=myfirstconstructor;