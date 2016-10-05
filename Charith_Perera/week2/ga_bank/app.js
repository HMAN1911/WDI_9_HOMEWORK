console.log('Bank Ready');
//
// function Account() {
//   // this.balance = 0;
//   var balance = 0;
//
//   function withdraw(amount) {
//     // balance +==
//     // return
//   }
//
//
//
//
//   return {
//     balance: balance,
//     withdraw: withdraw
//   };
// }
//
// var savings = Account();
//
// //
//
//
// function Account() {
//   this.balance = 0;
// }
//
// Account.prototype.withdraw = function(amount) {
//   this.balanec += amount
// }

var checkingInput = +document.getElementById("checking-input").value;
var savingsBox = document.getElementsByClassName("savings")[0];
var checkingBox = document.getElementsByClassName("checking")[0];
var withdrawSavingsBtn = document.getElementById('withdraw-savings');
var depositSavingsBtn = document.getElementById('deposit-savings');
var withdrawCheckingBtn = document.getElementById('withdraw-checking');
var depositCheckingBtn = document.getElementById('deposit-checking');
var savingsTotalDisplay = document.getElementById("savings-total");
var checkingTotalDisplay = document.getElementById("checking-total");

var Account = {
  balance: 0,
  deposit: function(amount) {
    this.balance += amount;
  },
  withdraw: function(amount) {
    if (this.balance - amount < 0) {
      if (this.getCombinedBalance() - amount < 0) {
        return;
      }
      else {
        this.linkedAccount.withdraw(amount - this.balance);
        this.balance = 0;
      }
    }
    else {
      this.balance -= amount;
    }
  },
  getCombinedBalance: function() {
    return this.balance + this.linkedAccount.balance;
  },
  linkedAccount: null
}

var savingsAccount = Object.create(Account);
var checkingAccount = Object.create(Account);

savingsAccount.linkedAccount = checkingAccount;
checkingAccount.linkedAccount = savingsAccount;

bindEvents();
updateDisplays();

function updateDisplays() {
  updateSavingsDisplay();
  updateCheckingDisplay();
}

function updateSavingsDisplay() {
  savingsTotalDisplay.innerHTML = savingsAccount.balance.toFixed(2);

  if (savingsAccount.balance === 0) {
    savingsBox.style.background = "red";
  }
  else {
    savingsBox.style.background = "grey";
  }
}

function updateCheckingDisplay() {
  checkingTotalDisplay.innerHTML = checkingAccount.balance.toFixed(2);

  if (checkingAccount.balance === 0) {
    checkingBox.style.background = "red";
  }
  else {
    checkingBox.style.background = "grey";
  }
}

function bindEvents() {
  depositSavingsBtn.addEventListener('click', function() {
    var amount = +document.getElementById("savings-input").value;
    savingsAccount.deposit(amount);
    updateDisplays();
  });

  withdrawSavingsBtn.addEventListener('click', function() {
    var amount = +document.getElementById("savings-input").value;
    savingsAccount.withdraw(amount);
    updateDisplays();
  });

  depositCheckingBtn.addEventListener('click', function() {
    var amount = +document.getElementById("checking-input").value;
    checkingAccount.deposit(amount);
    updateDisplays();
  });

  withdrawCheckingBtn.addEventListener('click', function() {
    var amount = +document.getElementById("checking-input").value;
    checkingAccount.withdraw(amount);
    updateDisplays();
  });
}
