// Not jQuery
var $ = document;

// Grab DOM elements
var errorAlert = $.querySelector('#error-alert');
var successAlert = $.querySelector('#success-alert');
var savingsInput = $.querySelector('#savings-input');
var checkingInput = $.querySelector('#cheque-input');
var savingsBalance = $.querySelector('#savings-balance');
var checkingBalance = $.querySelector('#cheque-balance');
var savingsDetails = $.querySelector('.savings-account .account-details');
var chequeDetails = $.querySelector('.cheque-account .account-details');

var customer = {
  accounts: {
    savings: 0,
    cheque: 0
  },
  // Return total balance across customer's accounts
  getTotalBalance: function() {
    var accountNames = Object.keys(this.accounts);
    var total = 0;
    for (var i = 0; i < accountNames.length; i++) {
      total += this.accounts[accountNames[i]];
    }
    return total;
  },
  // Attempt to deposit amount in selected account
  deposit: function(accountName, amount) {
    if (typeof this.accounts[accountName] === 'undefined') {
      return false;
    }
    this.accounts[accountName] += amount;
    return true;
  },
  // Attempt to withdraw input amount from selected account
  withdraw: function(accountName, amount) {
    if (typeof this.accounts[accountName] === 'undefined') {
      return false;
    }

    // If insufficient funds in selected account, check if
    // withdrawal amount can be deducted from other accounts
    if (this.accounts[accountName] < amount) {
      if (this.getTotalBalance() < amount) {
        return false;
      }
      else {
        // Move selected account to front of processing queue
        var accountNames = Object.keys(this.accounts);
        accountNames.splice(accountNames.indexOf(accountName), 1);
        accountNames.unshift(accountName);

        // Deduct remaining withdrawal amount from other accounts
        for (var i = 0; i < accountNames.length; i++) {
          var account = accountNames[i];
          if (this.accounts[account] >= amount) {
            this.accounts[account] -= amount;
            break;
          }
          else {
            amount -= this.accounts[account];
            this.accounts[account] = 0;
          }
        }
        return true;
      }
    }
    // Deduct withdrawal amount from selected account
    else {
      this.accounts[accountName] -= amount;
    }
    return true;
  }
};

var updateUI = function() {
  savingsBalance.innerHTML = customer.accounts.savings;
  checkingBalance.innerHTML = customer.accounts.cheque;

  // Set background color of account details
  if (customer.accounts.savings === 0) {
    savingsDetails.style.background = '#F99';
  }
  else {
    savingsDetails.style.background = '#DDD';
  }

  if (customer.accounts.cheque === 0) {
    chequeDetails.style.background = '#F99';
  }
  else {
    chequeDetails.style.background = '#DDD';
  }
};

var clearAlerts = function() {
  errorAlert.innerHTML = '';
  successAlert.innerHTML = '';
}

// Register event handlers
$.querySelector('#savings-withdraw-btn').addEventListener('click', function() {
  clearAlerts();
  var value = parseFloat(savingsInput.value);
  if (isNaN(value)) {
    errorAlert.innerHTML = 'Amount must be a number';
  }
  else if (!customer.withdraw('savings', value)) {
    errorAlert.innerHTML = 'Insufficient funds';
  }
  else {
    successAlert.innerHTML = 'Transaction successful';
    updateUI();
  }
});

$.querySelector('#savings-deposit-btn').addEventListener('click', function() {
  clearAlerts();
  var value = parseFloat(savingsInput.value);
  if (isNaN(value)) {
    errorAlert.innerHTML = 'Amount must be a number';
  }
  else if (!customer.deposit('savings', value)) {
    errorAlert.innerHTML = 'Account not found';
  }
  else {
    successAlert.innerHTML = 'Transaction successful';
    updateUI();
  }
});

$.querySelector('#cheque-withdraw-btn').addEventListener('click', function() {
  clearAlerts();
  var value = parseFloat(checkingInput.value);
  if (isNaN(value)) {
    errorAlert.innerHTML = 'Amount must be a number';
  }
  else if (!customer.withdraw('cheque', value)) {
    errorAlert.innerHTML = 'Insufficient balance';
  }
  else {
    successAlert.innerHTML = 'Transaction successful';
    updateUI();
  }
});

$.querySelector('#cheque-deposit-btn').addEventListener('click', function() {
  clearAlerts();
  var value = parseFloat(checkingInput.value);
  if (isNaN(value)) {
    errorAlert.innerHTML = 'Amount must be a number';
  }
  else if (!customer.deposit('cheque', value)) {
    errorAlert.innerHTML = 'Account not found';
  }
  else {
    successAlert.innerHTML = 'Transaction successful';
    updateUI();
  }
});

// Initial render
updateUI();
