var accounts = [new newAccount('savings', 1000), new newAccount('checking', 300)];
initialise(accounts[0], accounts[1]);
initialise(accounts[1], accounts[0]);

function newAccount(name, balance) {
  this.name = name;
  this.balance = balance;
  this.style = document.getElementById(name).style;
  this.display = document.getElementById(name + 'display');
  this.input = document.getElementById(name + 'input');
}

function initialise(account, backup) {
  updateDisplay(account);
  document.getElementById(account.name + 'withdrawbutton').addEventListener('click', function() {
  withdraw(account, backup);
});
  document.getElementById(account.name + 'depositbutton').addEventListener('click', function() {
  deposit(account);
});
}

function withdraw(account, backup) {
  var withdrawAmount = Number(account.input.value);
  if (!isNaN(withdrawAmount)) {
    if (account.balance >= withdrawAmount) {
      account.balance -= withdrawAmount;
    }
    else if (account.balance + backup.balance >= withdrawAmount) {
      withdrawAmount -= account.balance;
      account.balance = 0;
      backup.balance -= withdrawAmount;
    }
    else { alert('You have insufficient funds.'); }
    updateDisplay(account, backup);
  }
}

function deposit(account) {
  var depositAmount = Number(account.input.value);
  if (!isNaN(depositAmount)) {
    account.balance += depositAmount;
    updateDisplay(account);
  }
}

function updateDisplay() {
  for (var i = 0; i < arguments.length; i++) {
    arguments[i].display.innerHTML = '$' + arguments[i].balance.toFixed(2);
    arguments[i].balance > 0 ? arguments[i].style.backgroundColor = 'grey' : arguments[i].style.backgroundColor = 'red';
  }
}