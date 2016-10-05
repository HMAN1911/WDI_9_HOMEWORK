// SAVINGS ACCOUNT

// Savings Withdraw Button
var withdrawSavingsButton = document.getElementById('withdrawSavings');
// Savings Withdraw Button click event
withdrawSavingsButton.addEventListener('click', function(){
  console.log('withdraw savings button clicked');
  resultWithdrawSavings();
  checkSavingBalance();
});

// Savings Deposit Button
var depositSavingsButton = document.getElementById('depositSavings');
// Savings Deposit Button click event
depositSavingsButton.addEventListener('click', function(){
  console.log('deposit savings button clicked');
  resultDepositSavings();
});

// setting values for html ids: Savings input + total savings in bank
var savingsInput = document.getElementById('savingsInput');
var totalSavings = document.getElementById('savings');

// Withdraw inputed amount from current savings balance
var withdrawSavings = function (){
  var savingsInputValue = +savingsInput.value;
  var totalCurrentSavings = +totalSavings.textContent;
  var withdrawal = totalCurrentSavings - savingsInputValue;
  return withdrawal;
}

// Put new balance after withdrawal on html
var resultWithdrawSavings = function(){
  totalSavings.innerHTML = withdrawSavings();
  if (withdrawSavings() < 0) {
    checkSavingBalance();
  }
}

// Deposit inputed amount from current savings balance
var depositSavings = function (){
  var savingsInputValue = +savingsInput.value;
  var totalCurrentSavings = +totalSavings.textContent;
  var deposit = totalCurrentSavings + savingsInputValue;
  return deposit;
}

// Put new savings balance after deposit on html
var resultDepositSavings = function(){
  totalSavings.innerHTML = depositSavings();
}

// CHECKINGS ACCOUNT

// Checking Withdraw Button
var withdrawCheckingButton = document.getElementById('withdrawChecking');
// Checking Withdraw Button click event
withdrawCheckingButton.addEventListener('click', function(){
  console.log('withdraw checking button clicked');
  resultWithdrawChecking();
  checkCheckingBalance();
});

// Checking Deposit Button
var depositCheckingButton = document.getElementById('depositChecking');
// Checking Deposit Button click event
depositCheckingButton.addEventListener('click', function(){
  console.log('deposit checking button clicked');
  resultDepositChecking();
  checkSavingBalance();
});

// setting values for html ids: Savings input + total savings in bank
var checkingInput = document.getElementById('checkingInput');
var totalChecking = document.getElementById('checking');

// Withdraw inputed amount from current savings balance
var withdrawChecking = function (){
  var checkingInputValue = +checkingInput.value;
  var totalCurrentChecking = +totalChecking.textContent;
  var withdrawal = totalCurrentChecking - checkingInputValue;
  return withdrawal;
}

// Put new checking balance after withdrawal on html
var resultWithdrawChecking = function(){
  checkSavingBalance();
  totalChecking.innerHTML = withdrawChecking();
}

// Deposit inputed amount from current checking balance
var depositChecking = function (){
  var checkingInputValue = +checkingInput.value;
  var totalCurrentChecking = +totalChecking.textContent;
  var deposit = totalCurrentChecking + checkingInputValue;
  return deposit;
}

// Put new checking balance after deposit on html
var resultDepositChecking = function(){
  totalChecking.innerHTML = depositChecking();
}

// BALANCE SYNC

var checkCheckingBalance = function() {
  var totalCurrentChecking = +totalChecking.textContent;
  var totalCurrentSavings = +totalSavings.textContent;

  var takeFromSavings = function() {
    return totalCurrentChecking + totalCurrentSavings;
  }
  var makeCheckingZero = function(){
    return totalCurrentChecking - totalCurrentChecking;
  }

  if (totalCurrentChecking < 0) {
      totalSavings.innerHTML = takeFromSavings();
      totalChecking.innerHTML = makeCheckingZero();
  }
}

var checkSavingBalance = function(){
  var totalCurrentSavings = +totalSavings.textContent;
  if (totalCurrentSavings < 0) {
    totalSavings.innerHTML = 'ERROR';
  }
}
