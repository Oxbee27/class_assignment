class BankAccount  {
constructor(name, amount, accountType){

    this.name = name
    this.amount = amount
    this.accountNumber = this.generateAccountNumber()
    this.isFrozen = false
    this.setAccountTypes(accountType)
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
 withdraw(amount){
    if(this.isFrozen){
console.log("account is frozen can not withdraw")
return;
}
if(this.isDeactivated){
console.log("This account is deactivated. you can not withdraw")
return;

}
if(this.amount >= amount){
    this.amount -= amount
}else{
    return "insufficient balance"
}

}

transfer(receiverAccount, amount){

if(this.isFrozen){
console.log("account is frozen can not make a transfer")
return;
}
if(this.isDeactivated){
console.log("This account is deactivated. you can not make a transfer")
return;

}
if(amount <= 0){
console.log("invalid amount")
return;

}
if(!(receiverAccount instanceof BankAccount)){
console.log("Account does not exist")
return;
}
if(this === receiverAccount){
console.log("you can not transfer to yourself")
return;

}
if(this.amount < amount){
    console.log("insufficient balance")
    return
}
this.amount -= amount
 receiverAccount.amount += amount

}

freezeAccount(){
this.isFrozen = true

}

setAccountTypes(accountType){
    accountType = accountType.toLowerCase()
if(accountType === "savings" || accountType === "current") {
     this.accountType = accountType

}else{
    console.log(

        "invalid account type"
    ) 
}

}

deactivateAccount(){
    this.isDeactivated = true
}

}

let account1 = new BankAccount("Oxbee", 1000000, "savings")
let account2 = new BankAccount("Bigwig", 500000, "current")
let account3 = new BankAccount("Moses", 200000, "savings")
account1.transfer(account2, 40000)
// account1.deactivateAccount()
// console.log(account1)
// account1.setAccountType()
// account1.freezeAccount()
// account1.deposit(100000)
// account1.withdraw(50000)
// console.log(account1.amount)
console.log(account1)