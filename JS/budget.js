document.getElementById('calculate-button').addEventListener('click', function () {
    const perPlayerExpenseField = document.getElementById('player-expense-field');
    const perPlayerStringValue = perPlayerExpenseField.value;
    const perPlayerActualExpense = parseFloat(perPlayerStringValue);
    perPlayerExpenseField.value = '';
    if (isNaN(perPlayerActualExpense)) {
        alert('provide a valid input');
        return;
    }
    let totalNumberOfPlayer = 5;
    const totalExpenseForPlayer = perPlayerActualExpense * totalNumberOfPlayer;
    const playerExpenseTotal = document.getElementById('total-player-expense');
    playerExpenseTotal.innerText = totalExpenseForPlayer;
})
document.getElementById('calculate-total').addEventListener('click', function () {
    const managerInputField = document.getElementById('manager-expense-field');
    const managerInputFieldStringValue = managerInputField.value;
    const managerInputFieldActualValue = parseFloat(managerInputFieldStringValue);
    const coachInputField = document.getElementById('coach-expense-field');
    const coachInputFieldStringValue = coachInputField.value;
    const coachInputFieldActualValue = parseFloat(coachInputFieldStringValue);
    managerInputField.value = '';
    coachInputField.value = '';
    if (isNaN(managerInputFieldActualValue, coachInputFieldActualValue)) {
        alert('provide a valid input');
        return;
    }
    const playerExpenseTextField = document.getElementById('total-player-expense');
    const playerExpenseInnerValueString = playerExpenseTextField.innerText;
    const playerExpenseRealValue = parseFloat(playerExpenseInnerValueString);
    const finalTotalExpense = managerInputFieldActualValue + coachInputFieldActualValue + playerExpenseRealValue;
    const totalExpenseForTeamField = document.getElementById('total-expense');
    totalExpenseForTeamField.innerText = finalTotalExpense;
})