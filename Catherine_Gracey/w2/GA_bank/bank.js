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

var checkingBalance = 0;
var savingsBalance = 0;

function displayBalances(){
  var savingsBal = document.getElementById("savings-bal");
  savingsBal.textContent = "$" + savingsBalance.toFixed(2);
  if (savingsBalance > 0){
    savingsBal.className = "funds";
  } else {
    savingsBal.className = "empty";
  }
  var checkingBal = document.getElementById("checking-bal")
  checkingBal.textContent = "$" + checkingBalance.toFixed(2);
  if (checkingBalance > 0){
    checkingBal.className = "funds";
  } else {
    checkingBal.className = "empty";
  }
}

function clearValue(elem){
  document.getElementById(elem).value = "";
}

function deposit(){
  if (this.id === "checking-deposit"){
    checkingBalance += parseFloat(document.getElementById("checking-amt").value);
    clearValue("checking-amt");
  } else {
    savingsBalance += parseFloat(document.getElementById("savings-amt").value);
    clearValue("savings-amt");
  }
  displayBalances();
}

function withdraw(){
  var acc = this.id;
  var amt = 0, overdraft = 0;
  if (acc === "checking-withdraw"){
    amt = parseFloat(document.getElementById("checking-amt").value);
    if (amt > checkingBalance){
      overdraft = Math.abs(amt - checkingBalance);
    }
    //clearValue("checking-amt");
  } else {
    amt = parseFloat(document.getElementById("savings-amt").value);
    if (amt > savingsBalance){
      overdraft = Math.abs(amt - savingsBalance);
    }
    //clearValue("savings-amt");
  }
  //Check that there is enough money in combined accounts. If not, ignore transaction
  var total = checkingBalance + savingsBalance;
  if (amt > total){
    return;
  }
  if (acc === "checking-withdraw"){
    if (overdraft){
      savingsBalance -= overdraft;
      checkingBalance = 0;
    } else {
      checkingBalance -= amt;
    }
    clearValue("checking-amt");
  } else {
    if (overdraft){
      checkingBalance -= overdraft;
      savingsBalance = 0;
    } else {
      savingsBalance -= amt;
    }
    clearValue("savings-amt");
  }
  displayBalances();
}

window.onload = function(){
  document.getElementById("checking-deposit").addEventListener("click", deposit);
  document.getElementById("savings-deposit").addEventListener("click", deposit);
  document.getElementById("checking-withdraw").addEventListener("click", withdraw);
  document.getElementById("savings-withdraw").addEventListener("click", withdraw);
}
