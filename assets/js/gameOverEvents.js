const playAgainDiv = document.querySelector('.playAgainDiv');
const playAgainBtn = document.querySelector('.playAgainBtn');
const body = document.querySelector('body');
const gameOverCause = document.querySelector('#gameOverCause');
const backToMenuBtn = document.querySelector('.back-to-menu-btn');

// RESTART
function gameOverScreen() {
    switch (counter) {
        case 0:
            gameOverCause.innerText = '"O" ganhou"';
            break;

        case 1:
            gameOverCause.innerText = '"X" ganhou';
            break;

        case 2:
            gameOverCause.innerText = 'Deu velha...';
            break;

        case 3:
            gameOverCause.innerText = 'Jogo Finalizado';
            break;
        
        default:
            gameOverCause.innerText = 'Ocorreu algum erro';
    }
    gameOverScreenHeight();
    gameRestart();
    if (isGameOver() == true || isForcedEnd == true) {
        disableBoard();
        backToMenu();
        divGameOver.style.transform = 'translateY(0)';
    }
}

function gameOverScreenHeight() {
    divGameOver.style.height = `${body.offsetHeight}px`;
}

function gameRestart() {
    playAgainDiv.addEventListener('click', gameReset);
    playAgainDiv.addEventListener('click', () => {
        playAgainBtn.style.right = '0';
        playAgainDiv.addEventListener('mouseover', () => {
            playAgainDiv.style.backgroundColor = '#000';
        });
        playAgainDiv.addEventListener('mouseout', () => {
            playAgainDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        });
    });
}

function gameReset() {
    clearPlays();
    setTimeout(() => divGameOver.style.transform = 'translateY(-200%)', 500);
    setTimeout(clearBoard, 500);
    setTimeout(resetActionsDisplay, 500);
    setTimeout(resetRestartBtnAnim, 1000);
}

function disableBoard() {
    for (let playArea of playAreas) {
        playArea.style = 'pointer-events: none';
    }
}

function clearPlays() {
    playerX = [];
    playerO = [];
    counter = 0;
}

function clearBoard() {
    for (let playArea of playAreas) {
        playArea.innerHTML = '';
    }
}

function resetActionsDisplay() {
    for (let playArea of playAreas) {
        playArea.style = 'pointer-events: default';
    }
}

function resetRestartBtnAnim() {
    playAgainBtn.style.right = '100%';
}

// GO TO MENU
function backToMenu() {
    backToMenuBtn.addEventListener('click', gameReset);
    backToMenuBtn.addEventListener('click', bringBackMenuSection);
}

function bringBackMenuSection() {
    mainMenu.style.transform = 'translateY(0)';
    gameBoard.style.opacity = '0';
}