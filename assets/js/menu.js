const mainMenu = document.querySelector('#main-menu');
const menuOptions = document.querySelectorAll('.menu-option-btn');
const gameBoard = document.querySelector('#game-board');
const onePlayerBtn = document.querySelector('#one-player-btn');

function setGameIntro() {
    mainMenu.style.transform = 'scale(1)';
    mainMenu.style.height = `${body.offsetHeight}px`;
}

window.addEventListener('load', setGameIntro); 

// GAME START
for (menuOpt of menuOptions) {
    menuOpt.addEventListener('click', startGame);
}

// ONE PLAYER MODE
onePlayerBtn.addEventListener('click', startBot);

function startGame() {
    mainMenu.style.transform = 'translateY(200%)';
    gameBoard.style.opacity = '1';
}
