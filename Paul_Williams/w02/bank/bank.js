var savingsBal = 55.55;
var checkingBal = 44.44;

var savingsInput = document.getElementsByTagName('input')[0];
var checkingInput = document.getElementsByTagName('input')[1];
var savingsWithdrawBtn = document.getElementsByTagName('button')[0];
var savingsDepositBtn = document.getElementsByTagName('button')[1];
var checkingWithdrawBtn = document.getElementsByTagName('button')[2];
var checkingDepositBtn = document.getElementsByTagName('button')[3];
var savingsBalDisplay = document.getElementsByTagName('span')[0];
var checkingBalDisplay = document.getElementsByTagName('span')[1];
var savingsBox = document.getElementsByTagName('section')[0];
var checkingBox = document.getElementsByTagName('section')[1];

function updateDisplays() {
  savingsBal = parseFloat(savingsBal.toFixed(2));
  checkingBal = parseFloat(checkingBal.toFixed(2));
  savingsBalDisplay.textContent = savingsBal;
  checkingBalDisplay.textContent = checkingBal;
  savingsInput.value = '';
  checkingInput.value = '';
  if (savingsBal === 0) {
    savingsBox.style.background = 'red';
  } else {
    savingsBox.style.background = 'grey';
  }
  if (checkingBal === 0) {
    checkingBox.style.background = 'red';
  } else {
    checkingBox.style.background = 'grey';
  }
}

function validateInput(string) { 
  string = parseFloat(string);
  if (string > 0) {
    return string;
  }
  return false;
}

updateDisplays();

savingsDepositBtn.addEventListener('click', function() {
  savingsBal += validateInput(savingsInput.value);
  updateDisplays();
});

checkingDepositBtn.addEventListener('click', function() {
  checkingBal += validateInput(checkingInput.value);
  updateDisplays();
});

savingsWithdrawBtn.addEventListener('click', function() {
  if (validateInput(savingsInput.value) <= savingsBal) {
    savingsBal -= validateInput(savingsInput.value);
  } else if (validateInput(savingsInput.value) <= savingsBal + checkingBal) {
    checkingBal -= validateInput(savingsInput.value) - savingsBal;
    savingsBal = 0; 
  }
  updateDisplays();
});

checkingWithdrawBtn.addEventListener('click', function() {
  if (validateInput(checkingInput.value) <= checkingBal) {
    checkingBal -= validateInput(checkingInput.value);
  } else if (validateInput(checkingInput.value) <= savingsBal + checkingBal) {
    savingsBal -= validateInput(checkingInput.value) - checkingBal;
    checkingBal = 0; 
  }
  updateDisplays();
});
