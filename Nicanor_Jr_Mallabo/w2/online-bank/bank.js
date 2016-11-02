console.log("Online Bank");
var accountType = "";
var event = "";
 
//distinguish the account type and the amount to be deposited // marry the formulas here
function actionToAccount(account, amount) { //GET
    balance = document.getElementById("display-balance-" + account).value;
    var total = (event=="deposit") ? depositFormula(balance, amount) : withdrawFormula(balance, amount);
    return total;
}
//call the actionToAccount function here and print to display the results.// SET
function displayBalance(account) {

    var action = document.getElementById("input-deposit-" + account).value;
    var total = actionToAccount(accountType,action);

    if (total <= -1) { //check current account type if negate
        var newAccountType = (accountType == "checking") ? accountType = "savings" : accountType = "checking";//swicthed from current account type
        total = actionToAccount(newAccountType, Math.abs(total)); // convert the negative total balance from current account type ask for new account type
        if (total <= -1) {document.getElementById("input-deposit-" + account).value = 0;notEnough();return;} //check balance from new account type, exit if its not enough
        else { document.getElementById("display-balance-" + newAccountType).value = total }// otherwise get here at newAccountType and display;
        document.getElementById("display-balance-" + account).value = 0; //clear balance of the current account if not exited from line 19.
    }
    else {document.getElementById("display-balance-" + account).value = total;} //display enough  current account type.

    document.getElementById("input-deposit-" + account).value = 0; // clear input deposit or withdra text.
    changeColor(); //change color when zero to red else gray.
}
//the math deposit // 
function depositFormula(balance, amount) {
    var balance = parseFloat(balance) + parseFloat(amount); 
    return balance;
}
//the math withdraw
function withdrawFormula(balance, amount) {
    var balance = parseFloat(balance) - parseFloat(amount);
    return balance;
}

function notEnough(){
    alert("You're poor fool");
}

//function isNumberKey()
//{
    //var charCode = (evt.which) ? evt.which : evt.keyCode; 
    //if (document.get("input-deposit-checking").value(onkeydown)){
        //if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {return true;}
    //}
//}
//if (isNumberKey()) {return;}
//document.getElementById("input-deposit-checking").onchange = function() {isNumeric()}

var buttonDepositChecking = document.getElementById("button-deposit-checking"); //create reference for button of deposit on checking account
buttonDepositChecking.addEventListener("click", function() { 
    //if (parseFloat(document.getElementById("input-deposit-checking").value) == NaN) {return;}
    accountType="checking"; event="deposit"; 
    displayBalance(accountType)  
}); //Create click event

var buttonDepositSavings = document.getElementById("button-deposit-savings"); //Create reference reference for button of deposit on savings accounts
buttonDepositSavings.addEventListener("click", function() { 
    accountType="savings"; event="deposit"; 
    displayBalance(accountType) 
}); //Create click event


var buttonWithdrawChecking = document.getElementById("button-withdraw-checking"); //Create reference 
buttonWithdrawChecking.addEventListener("click", function() { 
    accountType="checking"; event="withdraw"; 
    displayBalance(accountType) 
}); //Create click event

var buttonWithdrawSavings = document.getElementById("button-withdraw-savings"); //Create reference
buttonWithdrawSavings.addEventListener("click", function() { 
    accountType="savings"; event="withdraw"; 
    displayBalance(accountType) 
}); //Create click event

document.getElementById("display-balance-savings").value = 1000;

changeColor();

function changeColor() {
    var checking = document.getElementById("display-balance-checking").value;
    if (checking=="0") {document.getElementById("box-checking").style.backgroundColor = "red";}
    else {document.getElementById("box-checking").style.backgroundColor = "gray";}

    var savings = document.getElementById("display-balance-savings").value;
    if (savings=="0") {document.getElementById("box-savings").style.backgroundColor = "red";}
    else {document.getElementById("box-savings").style.backgroundColor = "gray";}
}