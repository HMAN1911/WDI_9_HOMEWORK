
// * Keep track of the checking and savings balances somewhere
// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.
// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account (hint: add/remove classes with corresponding colours set in the CSS).
// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// // * Are there ways to refactor your code to make it DRYer
//
//

//define variables - balances, account, buttons
var transAccBal = 0.00;
var savAccBal = 0.00;
var wdTBtn = document.getElementById("withdrawT");
var depTBtn = document.getElementById("depositT");
var wdSBtn = document.getElementById('withdrawS');
var depSBtn = document.getElementById('depositS');
var againTBtn = document.getElementById("tryAgainT");
var againSBtn = document.getElementById("tryAgainS");
var amountT = document.getElementById('input');
var amountS = document.getElementById('input2');
var img = document.getElementsByTagName('img')[1];

document.getElementsByTagName('img')[1].style.display="none";

//function to get deposit amount and add it to balance
var deposit =function () {
  if(amountT.value !== "") {
    transAccBal = transAccBal + parseFloat(amountT.value);
    document.getElementsByClassName("bal")[1].innerHTML = transAccBal.toFixed(2);
} else if (amountS.value !== "") {
    savAccBal = savAccBal + parseFloat(amountS.value);
    document.getElementsByClassName("bal")[0].innerHTML = savAccBal.toFixed(2);
}
  // amountT.value = "";
  // amountS.value = "";
   document.getElementById('input').value = "";
   document.getElementById('input2').value = "";
  // return;
}

// function to withdraw
var withdraw = function () {
  // if insufficient funds flash a red NO
  if (transAccBal > parseFloat(amountT.value)) {
    transAccBal = transAccBal - parseFloat(amountT.value);
    document.getElementsByClassName("bal")[1].innerHTML = transAccBal.toFixed(2);
    document.getElementById('input').value = "";
    return;
  }
  // NO
    img.style.display="block";
}

var withdraw2 = function () {
  // if insufficient funds flash a red NO
  if (savAccBal > parseFloat(amountS.value)) {
    savAccBal = savAccBal - parseFloat(amountS.value);
    document.getElementsByClassName("bal")[0].innerHTML = savAccBal.toFixed(2);
    document.getElementById('input2').value = "";
    return;
  }
  // NO
    img.style.display="block";
}


// function to clear image and input box
var reset = function() {
  img.style.display="none";
  document.getElementById('input').value = "";
  document.getElementById('input2').value = "";

}

// add event listeners
wdSBtn.addEventListener("click", withdraw2);
depSBtn.addEventListener("click", deposit);
wdTBtn.addEventListener("click", withdraw);
depTBtn.addEventListener("click", deposit);
againTBtn.addEventListener("click", reset);
againSBtn.addEventListener("click", reset);
