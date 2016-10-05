// Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.
// When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account
// What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection,
// so if a withdrawal can be covered by the balances in both accounts,
// take the checking balance down to $0 and take the rest of the withdrawal
// from the savings account. If the withdrawal amount is more than the
// combined account balance, ignore it.
// Make sure there is overdraft protection going both ways.
// Are there ways to refactor your code to make it DRYer -->

var balance = 0;
var withBtn = document.getElementsByTagName('button')[0];
var depBtn = document.getElementsByTagName('button')[1];
var amount = document.getElementsByTagName('input')[0];
var newBalance=document.getElementsByTagName('span')[0];



var deposit = function(num1,num2) {
  return num1+num2;
}

var calculateDep = function() {
  var num1 = balance;
  var num2 = parseInt(amount.value);
  balance = deposit(num1,num2);
  newBalance.textContent = balance;
}

depBtn.addEventListener ('click', function() {
  calculateDep();
});

var withdrawal =function (num1,num2) {
  if (num2 > num1){
    alert ('You are poor');
  }else {
  return num1-num2;}
}

var calculateWitd= function () {
  var num1 = balance;
  var num2 = parseInt(amount.value)
  balance = withdrawal (num1,num2);
  newBalance.textContent = balance;
}

withBtn.addEventListener ('click', function(){
  calculateWitd();
})

var balance2 = 0;
var withBtn2 = document.getElementsByTagName('button')[2];
var depBtn2 = document.getElementsByTagName('button')[3];
var amount2 = document.getElementsByTagName('input')[1];
var newBalance2=document.getElementsByTagName('span')[1];

var deposit2 = function(num3,num4) {
  return num3+num4;
}

var calculateDep2 = function() {
  var num3 = balance2;
  var num4 = parseInt(amount2.value);
  balance2 = deposit2(num3,num4);
  newBalance2.textContent = balance2;
}

depBtn2.addEventListener ('click', function() {
  calculateDep2();
});
var withdrawal2 =function (num3,num4) {
  if (num4 > num3){
    alert ('You are poor');
  }else {
  return num3-num4;}
}

var calculateWitd2= function () {
  var num3 = balance2;
  var num4 = parseInt(amount2.value)
  balance2 = withdrawal2 (num3,num4);
  newBalance2.textContent = balance2;
}

withBtn2.addEventListener ('click', function(){
calculateWitd2();
});
