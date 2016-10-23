var employee=function(nm,ag,desgn,sal){
   this.name=nm;
   this.age=ag;
   this.designation=desgn;
   this.salary=sal;
}

employee.prototype.empName=function(nme){
this.name=nme;
console.log("name is ="+this.name)
}

employee.prototype.empAge=function(eag){
	this.age=eag;
	console.log("age is="+this.age);

}
employee.prototype.empDesignation=function(edeg){
	this.designation=edeg;
	console.log("designation is ="+this.designation);

}
employee.prototype.empSalary=function(esal){
   this.salary=esal;
   console.log("salary is ="+this.salary);

}
    


 exports.employee=employee;