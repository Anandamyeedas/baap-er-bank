function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear ihe input deposit field
    inputField.value = '';
    return amountValue;
    
}
function updateTotalField(totalFieldId, amount){

    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;

}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}


function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
   if (isAdd == true){
    balanceTotal.innerText = previousBalanceTotal + amount;
   }
   else{
    balanceTotal.innerText = previousBalanceTotal - amount;
   }
    
}




//hendle deposit btn event

document.getElementById('deposit-button').addEventListener
('click', function () {
    const newDepositAmount = getInputValue('deposit-input');
   if(newDepositAmount > 0){
    updateTotalField('deposit-total', newDepositAmount);
    updateBalance(newDepositAmount, true);
   }
    //get the amount diposited
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositText);
   
    // const depositTotal = document.getElementById('deposit-total');

    // const previousDepositText = depositTotal.innerText;
    //  const previousDepositAmount = parseFloat(previousDepositText);

    // const newDepositTotal = previousDepositAmount + newDepositAmount;

    // depositTotal.innerText = newDepositTotal;
    



    //update account balance total
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + newDepositAmount;
    

    //clear ihe input deposit field
    // depositInput.value = '';

});

//handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function(){

    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
   if(newWithdrawAmount > 0 && newWithdrawAmount < currentBalance){
    updateTotalField('withdraw-total', newWithdrawAmount);
    updateBalance(newWithdrawAmount, false);
   }
   if(newWithdrawAmount > currentBalance){
       console.log('you can not withdraw')
   }

    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);
    

    //set withdraw total
    // const withdrowTotal = document.getElementById('withdraw-total');
    // const previousWithdrawText = withdrowTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawText);

    // const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // withdrowTotal.innerText = newWithdrawTotal;
   
    //update balance
    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceText);
    //  balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount;
  
    //clear withdrow input 
    // withdrawInput.value = '';

})

