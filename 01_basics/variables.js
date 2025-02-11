const accountId = 1234
let accountName="Jiya"
var accountPswrd = "3321"     /*Prefer not to use because of issue in block scope and functional scope */
accountCity = "Jaipur"
let accountState

// accountId=2324      Generate error as const-value assigned can't be changed
console.log(accountId)
accountName="Anand"
console.table([accountId, accountName,accountPswrd,accountCity,accountState]);