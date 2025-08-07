const accountId = 1442
let accountEmail = "ch@google.com"
var accountPassword = "12345"
accountCity = "Delhi"

//accountId = 2 // not allowed

accountEmail = "cg@google.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
let accountState

console.log(accountId);


/*
Prefer not to use var because of
issue in block scope and function
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
