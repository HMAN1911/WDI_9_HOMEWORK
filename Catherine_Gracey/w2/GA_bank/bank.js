// GA Bank ATM App

// Summary:
// This lab will help you practice JavaScript functions and manipulating the DOM. You'll be selecting elements, manipulating HTML, and manipulating style along with building out the logic using JavaScript.

// Specification:
// Keep track of the checking and savings balances somewhere
// Add functionality so that a user can deposit money into one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Add functionality so that a user can withdraw money from one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account
// What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.
// Make sure there is overdraft protection going both ways.
// Are there ways to refactor your code to make it DRYer
var balances = {};
balances.checking = 0;
balances.savings = 0;
var bankingHistory = [];

function displayBalances(){
  for (var account in balances){
    var elem = document.getElementById(account + "-bal")
    elem.textContent = "$" + balances[account].toFixed(2);
    if (balances[account] > 0){
      elem.className = "funds";
    } else {
      elem.className = "empty";
    }
  }
}

function clearValue(elem){
  document.getElementById(elem).value = "";
}

function getAccount(elemID){
  var acc = elemID.split("-");
  return acc[0];
}

function saveTransaction(acc, amt, outcome){
  var transaction = {
    account: acc,
    amount: amt,
    outcome: outcome
  };
  for (var account in balances){
    transaction[account] = balances[account];
  }
  bankingHistory.push(transaction);
  showTransactions();
}

function showTransactions(){
  var history = document.getElementById("history");
  var transaction = document.createElement("div");
  transaction.className = "transaction";
}

function deposit(){
  var acc = getAccount(this.id);
  var amt = parseFloat(document.getElementById(acc + "-amt").value);
  clearValue(acc + "-amt");
  balances[acc] += amt;
  saveTransaction(acc, amt, "deposited");
  displayBalances();
}

function withdraw(){
  var acc = getAccount(this.id);
  var amt = parseFloat(document.getElementById(acc + "-amt").value);
  //Check that there is enough money in combined accounts. If not, ignore transaction
  var total = balances.checking + balances.savings;
  if (amt > total){
    saveTransaction(acc, amt, "withdrawal rejected");
    return;
  }
  var overdraft = 0;
  if (amt > balances[acc]){
    overdraft = Math.abs(amt - balances[acc]);
  }
  if (overdraft){
    balances[acc] = 0;
    for (var account in balances){
      if (overdraft <= balances[account]){
        balances[account] -= overdraft;
        overdraft = 0;
      } else {
        overdraft -= balances[account];
        balances[account] = 0;
      }
    }
    saveTransaction(acc, amt, "overdraft withdrawal");
  } else {
    balances[acc] -= amt;
    saveTransaction(acc, amt, "withdrawal");
  }
  clearValue(acc + "-amt");
  displayBalances();
}

window.onload = function(){
  document.getElementById("checking-deposit").addEventListener("click", deposit);
  document.getElementById("savings-deposit").addEventListener("click", deposit);
  document.getElementById("checking-withdraw").addEventListener("click", withdraw);
  document.getElementById("savings-withdraw").addEventListener("click", withdraw);
}
