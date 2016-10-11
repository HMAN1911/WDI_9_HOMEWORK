``// MULTIPLE ACCOUNTS - USE A FACTORY function

var makeAccount = function(){

var balance = 0;

  return {
    deposit: function(amount){
      balance = balance + amount;
      console.log('depositing');
    },

    getBalance: function(){
      return balance;
    }
  } //returns an object
}


// USE THIS FOR SMALL NO. OF ACCOUNTS
// var savingsAccount = {
//   balance: 0,
//   deposit: function(){},
//   withdraw: function(){}
// }
//
// var checkingsAccount = {
//
// }

///SINGLE ACCOUNT METHOD

var accountBalance = 0;

//This is the BANK LOGIC
//neither of these function display the balance they just check whats possible
//you can check to see if works by using in the console

function deposit(amount){
  accountBalance += amount;
}

function withdraw(amount){
  if(amount <= accountBalance){
  accountBalance -= amount;
  return true  //we successfully can withdraw the money
  }else {
    return false;  //we can't withdraw the money
  }
}


//=================================

//This is the USER INTERFACE
//Keep them separate  - separation of concerns

var balanceDiv = document.getElementById('balanceDiv');
var amountInput = document.getElementById('amount'); //cant put .value at the end of this bc browser will read the input too early at 0
var depositBtn = document.getElementById('depositBtn');
var withdrawBtn = document.getElementById('withdrawBtn');

function displayBalance(){
  balanceDiv.innerHTML = '$' + accountBalance;
}

depositBtn.addEventListener('click', function() {
  //get the value from the input
  var dollars = parseInt(amountInput.value);
  //deposit that amount
  deposit(dollars);
  //update balance
  displayBalance();
  //clear input box-shadow
  amountInput.value = '';
});


withdrawBtn.addEventListener('click', function(){
  //get the value from the input
  var dollars = parseInt(amountInput.value)
  //withdraw that amount
  //if the function is true (ie if withdraw amount is less than the account balance)
  if(withdraw(dollars)){
    //update balance
    displayBalance();
  }else{
    console.log('you poor fool'); //use this else statement to display the balance as red etc
    document.body.style.backgroundColor = 'red';
  }
  //clear input box-shadow
  amountInput.value = '';
})
