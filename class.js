class BankAccount  {
constructor(name, amount, accounType){

    this.name = name
    this.amount = amount
    this.accountNumber = this.generateAccountNumber()
    this.isFrozen = false
    this.setAccountType(accounType)
    this.isDeactivated = false

}
generateAccountNumber(){
    return Math.floor(Math.random() * 10000000000)

 }
 deposit(money){
if(this.isFrozen){
    console.log("Deposit not allowed. Account is frozen")
    return;
}
 if(this.isDeactivated){
console.log("This account is deactivated. You can not make deposit")
return;

}
    this.amount += money
 }