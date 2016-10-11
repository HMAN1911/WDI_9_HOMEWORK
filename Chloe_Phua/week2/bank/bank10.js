

var accountBalance = 0;
//

function deposit(amount) {
  accountBalance += amount;

  //test with deposit(50)
  // check "accountBalance"

}

function withdraw(amount) {
  if (amount <= accountBalance) {
    accountBalance -= amount;
    return accountBalance;
  } else {
    return false;
  }
}

//==========changing of interface ===========//

var balanceDiv = document.getElementById("balanceDiv");
var amountInput = document.getElementById("amount");
var depositBtn = document.getElementById("depositBtn");

function updateBalance() {
  balanceDiv.innerHTML= '$ ' + accountBalance;
}

updateBalance();

depositBtn.addEventListener('click', function() {
  //get value from input
  var amount = parseInt(amountInput.value);
  //deposit that amount
  deposit(amount);
  //update balance
  updateBalance();

  // clear input box
  amountInput.value = '';
});
