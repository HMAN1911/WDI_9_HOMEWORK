var userAccounts = {
    'Leon' : [0.0,0.0]

};

var current = "Leon";
var screenS = document.getElementById('savings');
var displayS = document.getElementById('savings-display');
var wBtnS = document.getElementById('savings-withdraw');
var dBtnS = document.getElementById('savings-deposit');
var inputS = document.getElementById('savings-amount');

var screenC = document.getElementById('checkings');
var displayC = document.getElementById('checkings-display');
var wBtnC = document.getElementById('checkings-withdraw');
var dBtnC = document.getElementById('checkings-deposit');
var inputC = document.getElementById('checkings-amount');

function red(account) {
  if (account === 0) {
    screenS.style.backgroundColor="red";
  }
  else if (account === 1) {
    screenC.style.backgroundColor="red";
  }
}
function green(account) {
  if (account === 0) {
    screenS.style.backgroundColor="green";
  }
  else if (account === 1) {
    screenC.style.backgroundColor="green";
  }
}

function withdraw(account,amount) {
  if (amount<0) {
    return;
  }
  if (userAccounts[current][account]>=amount) {
    userAccounts[current][account]-=amount;
    if (userAccounts[current][account]===0) {
      red(account);
    }
    if (account === 0) {
      displayS.textContent="$"+userAccounts[current][account].toFixed(2);
    } else if (account===1) {
      displayC.textContent="$"+userAccounts[current][account].toFixed(2);
    }
  }
  else if (userAccounts[current][account]<amount) {
    if (account === 0) {
        if (userAccounts[current][0]+userAccounts[current][1]>=amount) {
            userAccounts[current][1]-=(amount-userAccounts[current][0]);
            userAccounts[current][0]=0;
            red(0);
            if (userAccounts[current][1]===0) {
              red(1);
            }
            displayS.textContent="$"+userAccounts[current][0].toFixed(2);
            displayC.textContent="$"+userAccounts[current][1].toFixed(2);
        }
    } else if (account === 1) {
      if (userAccounts[current][1]+userAccounts[current][0]>=amount) {
          userAccounts[current][0]-=(amount-userAccounts[current][1]);
          userAccounts[current][1]=0;
          red(1);
          if (userAccounts[current][0]===0) {
            red(0);
          }
          displayS.textContent="$"+userAccounts[current][0].toFixed(2);
          displayC.textContent="$"+userAccounts[current][1].toFixed(2);
      }
    }
  }
}
function deposit(account,amount) {
  if (amount<0) {
    return;
  }
  green(account);
  userAccounts[current][account]+=amount;
  if (account===0) {
    displayS.textContent="$"+userAccounts[current][account].toFixed(2);
  }
  if (account===1) {
    displayC.textContent="$"+userAccounts[current][account].toFixed(2);
  }
}
wBtnS.addEventListener('click',function(){
  if (inputS.value === "") {
    return;
  }
  withdraw(0,parseFloat(inputS.value));
});
dBtnS.addEventListener('click',function(){
  if (inputS.value === "") {
    return;
  }
  deposit(0,parseFloat(inputS.value));
});

wBtnC.addEventListener('click',function(){
  if (inputC.value === "") {
    return;
  }
  withdraw(1,parseFloat(inputC.value));
});
dBtnC.addEventListener('click',function(){
  if (inputC.value === "") {
    return;
  }
  deposit(1,parseFloat(inputC.value));
});
