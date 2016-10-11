console.log('not working - trouble getting buttons working properly - see logic in comments');


// ** Key Requirements **

// Two Accounts - Savings Account (Deposits Only & Overdraft for Cheque Account)
// and Cheque Account (withdraw functionality and Overdraft for Savings Account)
//
// maintain and display balances - balance can't go negative - ignore attempts if attempt to withdraw more than in balance
// Zero balance - background goes RED
// Positive balance - background is Gray
// deposit functionality
// withdraw functionality from ONE of the accounts (Savings)
// user to see changes
//


// ** Process Deposits **

// Start with initial balance of $0 - refer to as previous Balance
// When Deposit button clicked - run function to add input amount to previous balance to get newBalance
// Display newBalance to user

// ** Process withdrawals **

// Maintain running newBalance
// When withdraw button clicked (use event.listeners on button(s) check:
//    if  amount from input box is <= Account 1 balance
//    then
//      Deduct transaction amount from balance and display remaining balance
//    else
//      if withdraw amount is > combined account balances
//      then display message re insufficient funds
//    else
//      reduce Account 1 balance to 0$
//          (display new balance and change Account 1 to red background-color)
//      reduce Account 2 by amount leftover after reducing Account 1 to zero withdraw amount
//          (display new balance for Account 2)

// Note:  User click event.listeners on buttons to trigger functions to do


// _____________________________________________________________________________________________



//
// var startBtn = document.getElementById('start-button');

// var previousBalSavings = 0;
//
// // var btnDepositSavings = document.getElementsByTagName('button')[1];
//
//
// var processDeposit = function(depositAmt,previousBalSavings) {
//   var newBalSavings = parseFloat.transactionAmount + parseFloat.previousBalSavings;
//   return newBalSavings;
// }
//
//
// var depositBtnSavings = document.getElementById('depositBtnSavings');
//   depositBtnSavings.addEventListener('click',processDeposit);







/
