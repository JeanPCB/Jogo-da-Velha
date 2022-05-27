const mainMenu = document.querySelector('#main-menu');
const menuOptions = document.querySelectorAll('.menu-option-btn');
const gameBoard = document.querySelector('#game-board');

window.addEventListener('load', () => mainMenu.style.transform = 'scale(1)'); 

for (let menuOption of menuOptions) {
    menuOption.addEventListener('click', startGame);
}

function startGame() {
    mainMenu.style.transform = 'translateY(200%)';
    gameBoard.style.opacity = '1';
}
