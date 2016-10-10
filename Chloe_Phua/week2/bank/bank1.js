// var savingsAccount = {
//   balance: 0,
//   deposit: function() {
//
//   }
//   withdraw: function() {
//
//   }
// }

//create a function that creates my objects so i can create new accounts
//this is a factory function

var makeAccount = function() {

  var balance = 0;

  return /*object*/{
    /*set desired object keys*/
    deposit: function(amount) {
      balance += amount;
    },
    getBalance: function() {
      return balance;
    }
  }
}
/*declare new account by saying var savingsAccount = makeAccount() */
var makeAccount = function(startingBal) {

  var balance = startingBal;

  return /*object*/{
    /*set desired object keys*/
    deposit: function(amount) {
      balance += amount;
    },
    getBalance: function() {
      return balance;
    }
  }
}
/*declare new account by saying var savingsAccount = makeAccount() */
