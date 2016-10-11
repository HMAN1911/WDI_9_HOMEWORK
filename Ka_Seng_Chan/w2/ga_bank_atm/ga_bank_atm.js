
// Initialize Account Balance
var savBalance = 100;
var chkBalance = 100;

// Variables for the balance display in DOM
var savBalanceDisplay = document.getElementById('sav_balance');
var chkBalanceDisplay = document.getElementById('chk_balance');

// Variables for inputs
var savInput = document.getElementById('sav_input');
var chkInput = document.getElementById('chk_input');

var deposit = function(account,amount) {
  if (amount) {
    if (account === 'savings') {
      savBalance += amount;
    }
    if (account === 'checking') {
      chkBalance += amount;
    }
  }
}

var withdraw = function(account,amount) {
  if (amount) {
    if (account === 'savings') {
      if ((savBalance + chkBalance - amount) >= 0) {
        if (savBalance - amount >= 0) {
          savBalance -= amount;
        } else {
        amount -= savBalance;
        savBalance = 0;
        chkBalance -= amount;
        }
      }
    }
    if (account === 'checking') {
      if ((chkBalance + savBalance - amount) >= 0) {
        if (chkBalance - amount >= 0) {
          chkBalance -= amount;
        } else {
          amount -= chkBalance;
          chkBalance = 0;
          savBalance -= amount;
        }
      }
    }
  }
}

var updateDisplay = function(account) {
  savBalanceDisplay.textContent = savBalance.toFixed(2);
  chkBalanceDisplay.textContent = chkBalance.toFixed(2);
  if (savBalance === 0) {
    savBalanceDisplay.parentNode.style.color = 'red';
  } else {
    savBalanceDisplay.parentNode.style.color = 'black';
  }

  if (chkBalance === 0) {
    chkBalanceDisplay.parentNode.style.color = 'red';
  } else {
    chkBalanceDisplay.parentNode.style.color = 'black';
  }
}

document.getElementById('sav_deposit_btn').addEventListener('click', function(){
  deposit('savings',parseFloat(savInput.value));
  updateDisplay();
});
document.getElementById('sav_withdraw_btn').addEventListener('click', function(){
  withdraw('savings',parseFloat(savInput.value));
  updateDisplay();
});

document.getElementById('chk_deposit_btn').addEventListener('click', function(){
  deposit('checking',parseFloat(chkInput.value));
  updateDisplay();
});
document.getElementById('chk_withdraw_btn').addEventListener('click', function(){
  withdraw('checking',parseFloat(chkInput.value));
  updateDisplay();
});

// Initialize the display
updateDisplay();
