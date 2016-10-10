
//display accounts as objects - because objects are more flexible
//if you want to add properties later then you can
//and you would probably want to for bank accounts

///////// BANK ACCOUNTS /////////////////////////

var savings = {
  balance: 0
}

var checkings = {
  balance: 0,
  ownerName: 'harry'
}

var credit = {
  balance: 0,
  ownerName: 'harry'
}

//////// VARIABLES  //////////////////////////

// var savInput = document.getElementsByTagName('input')[0]; //input of savings bank
// var checkInput = document.getElementsByTagName('input')[1]; //input of checkings bank


var savWButton = document.getElementsByTagName('button')[0]; //get savings withdraw button
var savDButton = document.getElementsByTagName('button')[1]; //get savings deposit button

var checkWButton = document.getElementsByTagName('button')[2]; //get checking withdraw button
var checkDButton = document.getElementsByTagName('button')[3]; //get checking deposit button

// THE ACTION OF DEPOSITING OR WITHDRAWING /////////// (programming stuff) - building the tiny machines to do each process

function deposit(amount1, balance) {
  // delay2();
  return parseInt(amount1) + parseInt(balance);
}

function withdraw(amount1, balance) {
  if (balance >= amount1) {
    return parseInt(balance) - parseInt(amount1);
  }
  if(balance < amount1){
    //run reject animation
    return balance
  }
}



//OVERDRAFT PROGRAM

// function withdrawFancy(amount, accountObject) {
//   console.log(accountObject.ownerName);
//   console.log(savings.balance);
//   console.log(amount);
// }
//
// withdrawFancy(20, checkings);


// DOM STUFF - accessing the right variables/inputs etc

////////// SAVINGS ///////////

function savingsDepositButtonHandler() {
  var currentDBalance = savings.balance;
  inputAmount = document.getElementById('input').value;
  console.log(inputAmount);//harrys line
  var newDBalance = deposit(inputAmount, currentDBalance);
  savings.balance = newDBalance;
  document.getElementsByTagName('span')[2].textContent = newDBalance;
}

function savingsWithdrawButtonHandler(){
  var currentBalance = savings.balance;
  var currentCheckBalance = checkings.balance;
  var inputAmount = document.getElementById('input').value;
  var difference = ((savings.balance - inputAmount) *-1);
  //if there is enough money in the account do this
    if(savings.balance >= inputAmount){
    var newBalance = withdraw(inputAmount, currentBalance);
    savings.balance = newBalance;
    document.getElementsByTagName('span')[2].textContent = newBalance;

  //if there isn't enough money take from the other account
}else {
   var inputTheAmount = document.getElementById('input').value;
   theBalance = withdrawFancySavings(inputTheAmount, currentBalance, currentCheckBalance);
   console.log(theBalance);
   document.getElementsByTagName('span')[4].textContent = theBalance;
   document.getElementsByTagName('span')[2].textContent = 0;
   savings.balance = 0;
}

// if((savings.balance < inputAmount) && (checkings.balance > difference)){
//         console.log(difference);
        // if(checkings.balance > difference) {
        //    checkings.balance -= difference;
        //    savings.balance += difference;
        //    savings.balance = newBalance;
        //    console.log(newBalance);
    //     // }
    // }
}

function withdrawFancySavings(amount, acctObjectTake, acctObjectGive){
  var difference = ((acctObjectTake - amount) *-1);
  // var wAmount = acctObjectTake - amount;
  if((acctObjectTake < amount) && (acctObjectGive > difference)){
    return acctObjectGive - difference;
  }
}


savDButton.addEventListener('click', savingsDepositButtonHandler);
savWButton.addEventListener('click', savingsWithdrawButtonHandler);

////////// CHECKINGS ///////////////

function checkingsDepositButtonHandler() {
  var currentBalance = checkings.balance;
  var inputAmount = document.getElementById('input2').value;
  var newBalance = deposit(inputAmount, currentBalance);
  checkings.balance = newBalance;
  document.getElementsByTagName('span')[4].textContent = newBalance;
}

function checkingsWithdrawButtonHandler(){
  var currentBalance = checkings.balance;
  var inputAmount = document.getElementById('input2').value;
  var newBalance = withdraw(inputAmount, currentBalance);
  //if there is enough money in the account do this
  checkings.balance = newBalance;
  document.getElementsByTagName('span')[4].textContent = newBalance;
  //if there isn't enough money take from the other account
}


checkDButton.addEventListener('click', checkingsDepositButtonHandler);
checkWButton.addEventListener('click', checkingsWithdrawButtonHandler);


/////////////// COLOURS ////////////////////////

// var delay = function(){
//   var zero = function(){
//     if(savBalance === 0){
//          document.getElementById("savings").style.backgroundColor = "crimson";
//      }else if(savBalance > 0){
//        document.getElementById("savings").style.backgroundColor = "lightgray";
//      }
//   }
// setTimeout(zero, 500)
// }
//
// var delay2 = function(){
//   var zero2 = function(){
//     if(checkings.balance === 0){
//          document.getElementById("checking").style.backgroundColor = "crimson";
//      }else if(checkings.balance > 0){
//        document.getElementById("checking").style.backgroundColor = "lightgray";
//      }
//   }
// setTimeout(zero2, 500)
// }
//
//








//
// //What happens when the user wants to withdraw more money from the checking account than is in the account?
// //These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts,
// //take the checking balance down to $0 and take the rest of the withdrawal from the savings account.
// //If the withdrawal amount is more than the combined account balance, ignore it.
// //Make sure there is overdraft protection going both ways.
// //Are there ways to refactor your code to make it DRYer
//
// /////////// VARIABLES ////////////////////////////////////
//
// var savInput = document.getElementsByTagName('input')[0]; //input of savings bank
// var checkInput = document.getElementsByTagName('input')[1]; //input of checkings bank
//
// var savWButton = document.getElementsByTagName('button')[0]; //get savings withdraw button
// var savDButton = document.getElementsByTagName('button')[1]; //get savings deposit button
//
// var checkWButton = document.getElementsByTagName('button')[2]; //get checking withdraw button
// var checkDButton = document.getElementsByTagName('button')[3]; //get checking deposit button
//
// var savBalance = 0;
// var checkBalance = 0;
//
// /////////////// COLOURS ////////////////////////
//
// var delay = function(){
//   var zero = function(){
//     if(savBalance === 0){
//          document.getElementById("savings").style.backgroundColor = "crimson";
//      }else if(savBalance > 0){
//        document.getElementById("savings").style.backgroundColor = "lightgray";
//      }
//   }
// setTimeout(zero, 500)
// }
//
// var delay2 = function(){
//   var zero2 = function(){
//     if(checkBalance === 0){
//          document.getElementById("checking").style.backgroundColor = "crimson";
//      }else if(checkBalance > 0){
//        document.getElementById("checking").style.backgroundColor = "lightgray";
//      }
//   }
// setTimeout(zero2, 500)
// }
//
// //////////// SAVINGS BANK ///////////////////////////////////
//
// var calculateD = function(userDeposit){
//   delay();
//   return savBalance += userDeposit;
// }
//
// var takeMoney = function(){
//   var userDeposit = parseInt(savInput.value);
//   savBalance = calculateD(userDeposit);
//   document.getElementsByTagName('span')[2].textContent = savBalance;
// }
//
// var calculateW = function(userWithdraw){
//   if(savBalance >= userWithdraw){
//     savBalance -= userWithdraw;
//   }else{
//     alert("Sorry youre broke!");
//   }
//   delay();
//   return savBalance;
// }
//
// var withdraw = function(){
//   var userWithdraw = parseInt(savInput.value);
//   savBalance = calculateW(userWithdraw);
//   document.getElementsByTagName('span')[2].textContent = savBalance;
// }
//
// savDButton.addEventListener('click', takeMoney);
// savWButton.addEventListener('click', withdraw);
//
//
// //////////// CHECKINGS BANK ///////////////////////////////////
//
// var calculateCD = function(checkUserDeposit){
//   delay2();
//   return checkBalance += checkUserDeposit;
// }
//
// var takeMoneyC = function(){
//   var checkUserDeposit = parseInt(checkInput.value);
//   checkBalance = calculateCD(checkUserDeposit);
//   document.getElementsByTagName('span')[4].textContent = checkBalance;
// }
//
// var calculateCW = function(checkUserWithdraw){
//   if(checkBalance >= checkUserWithdraw){
//     checkBalance -= checkUserWithdraw;
//   }else{
//     alert("Sorry youre broke!");
//     }
//     delay2();
//   return checkBalance;
// }
//
// var withdrawC = function(){
//   var checkUserWithdraw = parseInt(checkInput.value);
//   checkBalance = calculateCW(checkUserWithdraw);
//   document.getElementsByTagName('span')[4].textContent = checkBalance;
// }
//
// checkDButton.addEventListener('click', takeMoneyC);
// checkWButton.addEventListener('click', withdrawC);
//
//
// //to deposit in both banks with one function - create a function that takes two arguements -
// // first is the amount and the second is the account that you are referring too
