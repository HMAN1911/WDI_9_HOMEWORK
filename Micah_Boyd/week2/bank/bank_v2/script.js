console.log('ready');

// --------------- BANK LOGiC -----------------

// var savingsAccount = {
//   balance: 0;
//   deposit: function(){
//
//   };
//   withdraw: function(){
//
//   };
// }


var makeAccount = function(accountName, startingBalance){

  var name = accountName;
  var balance = startingBalance;

  return {
    deposit: function(amount){
      balance = balance + amount;
    },
    getbalance: function (){
      return balance;
    }
  }
}


var accountBalance = 0;

function deposit(amount){
  accountBalance += amount;
}

function withdraw(amount){
  if (amount <= accountBalance) {
    accountBalance -= amount;
    return true;
  } else {
    return false;
  }
}


// --------------- USER INTERFACE -----------------



var balanceDiv = document.getElementById('balanceDiv');
var amountInput = document.getElementById('amount');
var depositBtn = document.getElementById('depositBtn');
var withdrawBtn = document.getElementById('withdrawBtn');

function updateBalance(){
  balanceDiv.innerHTML = '$' + accountBalance;
}

updateBalance();

depositBtn.addEventListener('click', function(){

  var amount = parseInt(amountInput.value);
  deposit(amount);
  updateBalance();
  amountInput.value = '';

});

withdrawBtn.addEventListener('click', function(){

  var amount = parseInt(amountInput.value);
  if (withdraw(amount)){

    updateBalance();
    amountInput.value = '';
  } else {
    document.body.style.backgroundColor = "red";
  }

});
