var makeAccount = function(accountName){
  var balance = 0;
  var name = accountName;
  var span = null;
  return {
    getBalance: function(){
      return balance;
    },
    deposit: function(amount){
      balance += amount;
    },
    withdraw: function(amount){
      balance -= amount
    },
    getSpan: function(){
      return span;
    },
    setSpan: function(spanValue){
      span = spanValue;
    },
    getName: function(){
      return name;
    }
  }
};
var checkingAccount = makeAccount('checking');
var savingsAccount = makeAccount('savings');

//
// var checkingAccount = {
//   name : 'checking',
//   balance : 0,
//   span : null
// }
// var savingsAccount = {
//   name: 'savings',
//   balance : 0,
//   span : null
// }

//_____________________________________FUNCTION WITHDRAW______________________
function withdraw(account,amount) {
  if (account.getName() === 'savings'){    // Check if Savings is the selected account
    if (savingsAccount.getBalance() >= amount) { // IF founds are enough, take the money from it
      savingsAccount.withdraw(amount);
      spanSavings.textContent = '$' + savingsAccount.getBalance().toFixed(2) ;
      checkColors();
    }else if (savingsAccount.getBalance() + checkingAccount.getBalance() >= amount) { // IF NOT,
      var excedent = amount - savingsAccount.getBalance();     // Take the rest from other account
      savingsAccount.setBalance() -= (amount - excedent);
      checkingAccount.setBalance() -= excedent;
      spanSavings.textContent = '$' + savingsAccount.getBalance().toFixed(2) ;
      spanChecking.textContent = '$' + checkingAccount.getBalance().toFixed(2) ;
      checkColors();// check if balance is zero, then change background to red
      }
    }

  if (account.getName() === 'checking') {  // Check if Checking is the selected account
    if (checkingAccount.getBalance() >= amount) { // IF founds are enough, take the money from it
      checkingAccount.withdraw(amount);
      spanChecking.textContent = '$' + checkingAccount.getBalance().toFixed(2) ;
      checkColors();// check if balance is zero, then change background to red
    }else if (checkingAccount.getBalance() + savingsAccount.getBalance() >= amount) {  // IF NOT,
      var excedent = amount - checkingAccount.getBalance();         // Take the rest from other account
      checkingAccount.setBalance() -= (amount - excedent);
      savingsAccount.setBalance() -= excedent;
      spanChecking.textContent = '$' + checkingAccount.getBalance().toFixed(2) ;
      spanSavings.textContent = '$' + savingsAccount.getBalance().toFixed(2) ;
      checkColors();// check if balance is zero, then change background to red
    }
  }
}

// ____________________________________FUNCTION DEPOSIT_____________________
function deposit(account,amount) {
  if (account.getName() === 'savings'){ // SAVINGS deposit
    savingsAccount.deposit(amount);
    spanSavings.textContent = '$' + savingsAccount.getBalance().toFixed(2);
    checkColors();// check if balance is zero, then change background to red
  }
  if (account.getName() === 'checking') { // CHECKING deposit
    checkingAccount.deposit(amount);
    spanChecking.textContent = '$' + checkingAccount.getBalance().toFixed(2);
    checkColors();// check if balance is zero, then change background to red
  }
}
//_______________________________SPANS TO SHOW BALANCE ________________________
var spanSavings = document.getElementById('spanSavings');
    spanSavings.textContent = '$' + savingsAccount.getBalance().toFixed(2); // Show Saving account balance
var spanChecking = document.getElementById('spanChecking');
    spanChecking.textContent = '$' + checkingAccount.getBalance().toFixed(2); // Show Checking account balance

//______________________________CHECK INPUT VALUE ____________________________
var inputChecking = function() { // Return the value of the input at the checking box
  var input = document.getElementById('inputChecking');
  input = parseFloat(input.value);
  return input;
}
var inputSavings = function() {// Return the value of the input at the saving box
  var input = document.getElementById('inputSavings');
  input = parseFloat(input.value);
  return input;
}

//________________________________CHANGE BACKGROUND COLORS_____________________
function balanceZero(box) {
  document.getElementById(box).style.backgroundColor = 'red';
}
function balancePositive(box) {
  document.getElementById(box).style.backgroundColor = 'silver';
}
function checkColors() {
  if (savingsAccount.getBalance() === 0){// check if balance is zero, then change background to red
    balanceZero('savingsBox');
  }else{
    balancePositive('savingsBox');
  }
  if (checkingAccount.getBalance() === 0){// check if balance is zero, then change background to red
    balanceZero('checkingBox');
  }else {
    balancePositive('checkingBox');
  }
}
checkColors();
//______________________________BUTTONS________________________________________
var btnWdChecking = document.getElementById('withdrawChecking'); // Button that calls
    btnWdChecking.addEventListener('click', function () {       //  withdraw on Checking Account
        var inputValue = inputChecking();
        if (inputValue > 0) {
          withdraw(checkingAccount, inputValue);
        }

    });
var btnWdSavings = document.getElementById('withdrawSavings');  // Button that calls
    btnWdSavings.addEventListener('click',function () {         //  withdraw on Savings Account
        var inputValue = inputSavings();
        if (inputValue > 0) {
          withdraw(savingsAccount, inputValue);
        }
    });
var btnDepChecking = document.getElementById('depositChecking');  // Button that calls
    btnDepChecking.addEventListener('click',function () {         // deposit on Checking Account
        var inputValue = inputChecking();
        if (inputValue > 0) {
          deposit(checkingAccount, inputValue);
        }
    });
var btnDepSavings = document.getElementById('depositSavings');  // Button that calls
    btnDepSavings.addEventListener('click',function () {        // deposit on Savings Account
        var inputValue = inputSavings();
        if (inputValue > 0) {
          deposit(savingsAccount, inputValue);
        }
    });
