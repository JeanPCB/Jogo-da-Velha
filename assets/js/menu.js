const mainMenu = document.querySelector('#main-menu');
const gameBoard = document.querySelector('#game-board');
const onePlayerBtn = document.querySelector('#one-player-btn');
const twoPlayersBtn = document.querySelector('#two-players-btn');

window.addEventListener('load', () => mainMenu.style.transform = 'scale(1)'); 

// ONE PLAYER START
onePlayerBtn.addEventListener('click', startGame);
onePlayerBtn.addEventListener('click', playerVsBot);

// TWO PLAYERS START
twoPlayersBtn.addEventListener('click', startGame);

function startGame() {
    mainMenu.style.transform = 'translateY(200%)';
    gameBoard.style.opacity = '1';
}
