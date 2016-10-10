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

// var Account = {
//   balance: 0,
//   deposit: function(amount) {
//     this.balance += amount;
//   },
//   withdraw: function(amount) {
//     if (this.balance - amount < 0) {
//       if (this.getCombinedBalance() - amount < 0) {
//         return;
//       }
//       else {
//         this.linkedAccount.withdraw(amount - this.balance);
//         this.balance = 0;
//       }
//     }
//     else {
//       this.balance -= amount;
//     }
//   },
//   getCombinedBalance: function() {
//     return this.balance + this.linkedAccount.balance;
//   },
//   linkedAccount: null
// }

function Account() {
  var balance = 0;
  var linkedAccount = null;

  function getLinkedAccount() {
    return linkedAccount;
  }

  function getCombinedBalance() {
    return balance + getLinkedAccount().getBalance();
  }

  return {
    deposit: function(amount) {
      balance += amount;
    },
    getBalance: function() {
      return balance;
    },
    withdraw: function(amount) {
      if (balance - amount < 0) {
        if (getCombinedBalance() - amount < 0) {
          return;
        }
        else {
          getLinkedAccount().withdraw(amount - balance);
          balance = 0;
        }
      }
      else {
        balance -= amount;
      }
    },
    linkAccount: function(account) {
      linkedAccount = account;
    }
  }
}


// var savingsAccount = Object.create(Account);
// var checkingAccount = Object.create(Account);

var savingsAccount = Account();
var checkingAccount = Account();

savingsAccount.linkAccount(checkingAccount);
checkingAccount.linkAccount(savingsAccount);

// savingsAccount.linkedAccount = checkingAccount;
// checkingAccount.linkedAccount = savingsAccount;

bindEvents();
updateDisplays();

function updateDisplays() {
  updateSavingsDisplay();
  updateCheckingDisplay();
}

function updateSavingsDisplay() {
  savingsTotalDisplay.innerHTML = savingsAccount.getBalance().toFixed(2);

  if (savingsAccount.getBalance() === 0) {
    savingsBox.style.background = "red";
  }
  else {
    savingsBox.style.background = "grey";
  }
}

function updateCheckingDisplay() {
  checkingTotalDisplay.innerHTML = checkingAccount.getBalance().toFixed(2);

  if (checkingAccount.getBalance() === 0) {
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
