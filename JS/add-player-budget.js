document.getElementById('messi-button').addEventListener('click', function () {
    playerNameAddedToSelectedV('messi-title', 'messi-inside-list', 'messi-button');
})

document.getElementById('neymar-button').addEventListener('click', function () {
    playerNameAddedToSelectedV('neymar-title', 'neymar-inside-list', 'neymar-button');
})

document.getElementById('mbappe-button').addEventListener('click', function () {
    playerNameAddedToSelectedV('mbappe-title', 'mbappe-inside-list', 'mbappe-button');
})

document.getElementById('ramos-button').addEventListener('click', function () {
    playerNameAddedToSelectedV('ramos-title', 'ramos-inside-list', 'ramos-button');
})

document.getElementById('sanches-button').addEventListener('click', function () {
    playerNameAddedToSelectedV('sanches-title', 'sanches-inside-list', 'sanches-button');
})
document.getElementById('machado-button').addEventListener('click', function () {
    const playerNameList = document.querySelectorAll(".player-name");
    const playerNameLength = playerNameList.length;
    if (playerNameLength >= 5) {
        alert('can not add more than five player');
        return;
    }
})
