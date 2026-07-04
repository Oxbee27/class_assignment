class BankAccount  {
constructor(name, amount, accounType){

    this.name = name
    this.amount = amount
    this.accountNumber = this.generateAccountNumber()
    this.isFrozen = false
    this.setAccountType(accounType)
    this.isDeactivated = false

}