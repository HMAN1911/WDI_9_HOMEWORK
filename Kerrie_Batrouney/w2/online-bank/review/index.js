// var savingsAccount = {
//   balance: 0,
//   deposit: function() {
//
//   },
//   withdraw: function() {
//
//   }
//
// }


var makeAccount = function() {
  var balance = 0;
//returns an object
//object contains a function
  return {
    deposit : function(amount) {
    console.log('depositing');
    balance = balance + 1;
    },
    getBalance: function() {
      return balance;
    }
  }
}




var accountBalance = 0;


console.log('hello');
function deposit(amount) {
  accountBalance += amount;
}

function withdraw(amount) {
if (amount <= accountBalance) {
  accountBalance -= amount;
  return true;
}else {
  return false;
}
}

var balanceDiv = document.getElementById('balanceDiv');
var amountInput = document.getElementById('amount');
var depositBtn = document.getElementById('depositBtn');

function updateBalance() {
  balanceDiv.innerHTML = '$' + accountBalance;
}

updateBalance();

//get value from input
//deposit that amount
//update the balance
depositBtn.addEventListener('click', function(){
var amount = parseInt(amountInput.value);
deposit(amount);
updateBalance();
amountInput.value = '';
})

withdrawBtn.addEventListener('click', function(){
var amount = parseInt(amountInput.value);
if (withdraw(amount)) {
updateBalance();
amountInput.value = '';
}else {
  document.body.style.backgroundColor = 'red';
}
})
