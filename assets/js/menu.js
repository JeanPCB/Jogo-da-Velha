const mainMenu = document.querySelector('#main-menu');
const gameBoard = document.querySelector('#game-board');
const onePlayerBtn = document.querySelector('#one-player-btn');
const twoPlayersBtn = document.querySelector('#two-players-btn');

window.addEventListener('load', () => mainMenu.style.transform = 'scale(1)'); 

twoPlayersBtn.addEventListener('click', startGame);

function startGame() {
    mainMenu.style.transform = 'translateY(200%)';
    gameBoard.style.opacity = '1';
}
