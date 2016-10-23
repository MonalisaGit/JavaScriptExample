var Bank=function(acno,bal,uname,pwd){
	this.accno=acno;
	this.balance=bal;
	this.username=uname;
	this.password=pwd;
}

Bank.prototype.deposite=function(amt,fun1){
	this.ammount=amt;
	if(this.ammount<=0){
		throw new InvalidAmountException();
	}
	this.balance=this.balance+this.ammount;
	fun1(this.balance);
}

Bank.prototype.withdraw=function(amt,fun2){
	this.ammount=amt;
	if(this.balance<this.ammount){
		throw new InsufficientFundsException();
	}
	this.balance=this.balance-this.ammount;
	return this.ammmount;
	fun2(console.log("result is" +this.balance));
}


exports.Bank=Bank;