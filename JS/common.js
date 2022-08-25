function playerNameAddedToSelectedV(titleId, listId, buttonId) {
    const messiNameTitle = document.getElementById(titleId);
    const messiNameValue = messiNameTitle.innerText;
    const messiInsideList = document.getElementById(listId);
    messiInsideList.innerText = messiNameValue;
    const messiTitleSelectionButton = document.getElementById(buttonId);
    messiTitleSelectionButton.disabled = true;
}







