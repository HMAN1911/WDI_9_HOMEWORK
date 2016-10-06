var checkingAccount = {
  name : 'checking',
  balance : 0,
  span : null
}
var savingsAccount = {
  name: 'savings',
  balance : 0,
  span : null
}

//_____________________________________FUNCTION WITHDRAW______________________
function withdraw(account,ammount) {
  if (account.name === 'savings'){    // Check if Savings is the selected account
    if (savingsAccount.balance >= ammount) { // IF founds are enough, take the money from it
      savingsAccount.balance -=  ammount;
      spanSavings.textContent = '$' + savingsAccount.balance.toFixed(2) ;
      checkColors();
    }else if (savingsAccount.balance + checkingAccount.balance >= ammount) { // IF NOT,
      var excedent = ammount - savingsAccount.balance;     // Take the rest from other account
      savingsAccount.balance -= (ammount - excedent);
      checkingAccount.balance -= excedent;
      spanSavings.textContent = '$' + savingsAccount.balance.toFixed(2) ;
      spanChecking.textContent = '$' + checkingAccount.balance.toFixed(2) ;
      checkColors();// check if balance is zero, then change background to red
      }
    }

  if (account.name === 'checking') {  // Check if Checking is the selected account
    if (checkingAccount.balance >= ammount) { // IF founds are enough, take the money from it
      checkingAccount.balance -=  ammount;
      spanChecking.textContent = '$' + checkingAccount.balance.toFixed(2) ;
      checkColors();// check if balance is zero, then change background to red
    }else if (checkingAccount.balance + savingsAccount.balance >= ammount) {  // IF NOT,
      var excedent = ammount - checkingAccount.balance;         // Take the rest from other account
      checkingAccount.balance -= (ammount - excedent);
      savingsAccount.balance -= excedent;
      spanChecking.textContent = '$' + checkingAccount.balance.toFixed(2) ;
      spanSavings.textContent = '$' + savingsAccount.balance.toFixed(2) ;
      checkColors();// check if balance is zero, then change background to red
    }
  }
}

// ____________________________________FUNCTION DEPOSIT_____________________
function deposit(account,ammount) {
  if (account.name === 'savings'){ // SAVINGS deposit
    savingsAccount.balance +=  ammount;
    spanSavings.textContent = '$' + savingsAccount.balance.toFixed(2);
    checkColors();// check if balance is zero, then change background to red
  }
  if (account.name === 'checking') { // CHECKING deposit
    checkingAccount.balance +=  ammount;
    spanChecking.textContent = '$' + checkingAccount.balance.toFixed(2);
    checkColors();// check if balance is zero, then change background to red
  }
}
//_______________________________SPANS TO SHOW BALANCE ________________________
var spanSavings = document.getElementById('spanSavings');
    spanSavings.textContent = '$' + savingsAccount.balance.toFixed(2); // Show Saving account balance
var spanChecking = document.getElementById('spanChecking');
    spanChecking.textContent = '$' + checkingAccount.balance.toFixed(2); // Show Checking account balance

//______________________________CHECK INPUT VALUE ____________________________
var inputChecking = function() { // Return the value of the input at the checking box
  var temp = document.getElementById('inputChecking');
  temp = parseFloat(temp.value);
  return temp;
}
var inputSavings = function() {// Return the value of the input at the saving box
  var temp = document.getElementById('inputSavings');
  temp = parseFloat(temp.value);
  return temp;
}

//________________________________CHANGE BACKGROUND COLORS_____________________
function balanceZero(box) {
  document.getElementById(box).style.backgroundColor = 'red';
}
function balancePositive(box) {
  document.getElementById(box).style.backgroundColor = 'silver';
}
function checkColors() {
  if (savingsAccount.balance === 0){// check if balance is zero, then change background to red
    balanceZero('savingsBox');
  }else{
    balancePositive('savingsBox');
  }
  if (checkingAccount.balance === 0){// check if balance is zero, then change background to red
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
