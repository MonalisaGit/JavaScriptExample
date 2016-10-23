var student2=function(name,rollno){
	this.name=name;
	this.rollno=rollno;
}

student2.prototype.insertRecord = function(n,r,fun){
	this.name=n;
	this.rollno=r;
	fun(this.name+"  "+this.rollno);
}

student2.prototype.displayInformation = function(result){
	 result(this.rollno+"    "+this.name);

}

exports.student2=student2;