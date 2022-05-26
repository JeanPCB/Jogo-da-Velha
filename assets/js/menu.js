const mainMenu = document.querySelector('#main-menu');
const menuOptions = document.querySelectorAll('.menu-option-btn');
const gameBoard = document.querySelector('#game-board');
const body = document.querySelector('body');

for (let menuOption of menuOptions) {
    menuOption.addEventListener('click', startGame);
}

function startGame() {
    setTimeout(() => {
        body.style.overflow = 'auto';
        mainMenu.style.display = 'none';
    }, 3000);
    mainMenu.style.transform = 'translateY(200%)';
    gameBoard.style.opacity = '1';
}