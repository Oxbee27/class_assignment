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
if(!receiverAccount){
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
 receiverAccountNumber.amount += amount

}

freezeAccount(){
this.isFrozen = true

}

setAccountType(accounType){
if(accounType === "savings" || accounType === "current") {
     this.accountType = accounType

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
