console.log('ONLINE bank');

var savingsBal = 0;
var checkingBal = 0;
var bankBalance = savingsBal + checkingBal;


document.getElementsByName('depSavings')[0].addEventListener("click", savingsDeposit);
document.getElementsByName('depChecking')[0].addEventListener("click", chekingDeposit);
document.getElementsByName('withdrawSavings')[0].addEventListener("click", savingsWithdrawal);
document.getElementsByName('withdrawChecking')[0].addEventListener("click", chekingWithdrawal);

function savingsDeposit() {
  var savingsInput = parseFloat(document.getElementsByName('savingsInput')[0].value);
  savingsBal += savingsInput;
  getBankBalance();
  document.getElementsByClassName("savingsBal")[0].innerHTML = savingsBal.toFixed(2);
  makeBlue();
}

function chekingDeposit() {
  var checkingInput = parseFloat(document.getElementsByName('checkingInput')[0].value);
  checkingBal += checkingInput;
  getBankBalance();
  document.getElementsByClassName("checkingBal")[0].innerHTML = checkingBal.toFixed(2);
  makeBlue();
}

function savingsWithdrawal() {
  var savingsInput = parseFloat(document.getElementsByName('savingsInput')[0].value);
  if (savingsBal - savingsInput < 0) {
    document.getElementsByClassName("savingsBal")[0].innerHTML = " Insufficient Funds";
    makeRed();
    useOdProt(savingsInput, 0);
    return;
  } else {
    savingsBal -= savingsInput;
    getBankBalance();
    document.getElementsByClassName("savingsBal")[0].innerHTML = savingsBal.toFixed(2);
    makeBlue();
  }
}

function chekingWithdrawal() {
  var checkingInput = parseFloat(document.getElementsByName('checkingInput')[0].value);
  if (checkingBal - checkingInput < 0) {
    document.getElementsByClassName("checkingBal")[0].innerHTML = " Insufficient Funds";
    makeRed();
    useOdProt(checkingInput, 1);
    return;
  } else {
    checkingBal -= checkingInput;
    getBankBalance();
    document.getElementsByClassName("checkingBal")[0].innerHTML = checkingBal.toFixed(2);
    makeBlue();
  }
}

function makeRed() {
  document.getElementsByClassName('wrapper')[0].style.backgroundColor = 'red';
}

function makeBlue() {
  document.getElementsByClassName('wrapper')[0].style.backgroundColor = 'white'
}

function getBankBalance() {
  bankBalance = (savingsBal + checkingBal).toFixed(2);
  console.log('Savings balance = $' + savingsBal.toFixed(2) + '   Checking Balance balance = $' + checkingBal.toFixed(2) + '   Bank Balance = $' + bankBalance);
}

function useOdProt(amtReqd, acc2Od) {
  if ((bankBalance - amtReqd) < 0) {
    console.log('$' + amtReqd + ' is unavailable. you only have total funds of $' + bankBalance);
    return
  } else {
    console.log('lets use the OD facility');
    if (acc2Od === 0) { // OD Checking bc savings Insufficient
      amtReqd -= savingsBal;
      savingsBal = 0;
      checkingBal -= amtReqd;
      getBankBalance();
      document.getElementsByClassName("checkingBal")[0].innerHTML = checkingBal.toFixed(2);
      document.getElementsByClassName("savingsBal")[0].innerHTML = savingsBal.toFixed(2);
      document.getElementsByClassName("savingsBal")[0].innerHTML = " USING OD from CHECKING";
      makeBlue();
    }
    if (acc2Od === 1) { // OD savings bs checking Insufficient
      amtReqd -= checkingBal;
      checkingBal = 0;
      savingsBal -= amtReqd
      getBankBalance();
      document.getElementsByClassName("checkingBal")[0].innerHTML = checkingBal.toFixed(2);
      document.getElementsByClassName("savingsBal")[0].innerHTML = savingsBal.toFixed(2);
      document.getElementsByClassName("checkingBal")[0].innerHTML = " USING OD from SAVINGS";
      makeBlue();
    }
    return
  }
}
