function playerNameAddedToSelectedV(titleId, listId, buttonId) {
    const playerNameTitle = document.getElementById(titleId);
    const playerNameValue = playerNameTitle.innerText;
    const playerNameInsideList = document.getElementById(listId);
    playerNameInsideList.innerText = playerNameValue;
    const playerTitleSelectionButton = document.getElementById(buttonId);
    playerTitleSelectionButton.disabled = true;
    playerTitleSelectionButton.style.backgroundColor = 'gray';
}








