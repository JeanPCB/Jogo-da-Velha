const playAgainDiv = document.querySelector('.playAgainDiv');
const playAgainBtn = document.querySelector('.playAgainBtn');
const body = document.querySelector('body');
const gameOverCause = document.querySelector('#gameOverCause');
const backToMenuBtn = document.querySelector('.back-to-menu-btn');
const showBoardBtn = document.querySelector('.show-board-btn');

let arrowIconCounter = 0;

// RESTART
function gameOverScreen() {
    if (isGameOver() == true || isForcedEnd == true) {
        gameOverScreenHeight();
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
        disableForcedEndGame();
        showHideBoard();
        gameRestart();
        disableBoard();
        backToMenu();
        divGameOver.style.transform = 'translateY(0)';

        return true;
    } else {
        return false;
    }
}

function gameOverScreenHeight() {
    divGameOver.style.height = `${body.offsetHeight}px`;
}

function disableForcedEndGame() {
    endGameForced.style = 'pointer-events: none; color: #2f2f2f';
}

function ableForcedEndGame() {
    endGameForced.style = 'pointer-events: default; color: #fff';
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
    showHideBoard();
    ableForcedEndGame();
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
    backToMenuBtn.addEventListener('click', () => window.location.reload());
}

// SHOW BOARD AFTER GAMEOVER
function showHideBoard() {
    showBoardBtn.addEventListener('click', () => {
        arrowIconChange();
        changeGameOverBg(arrowIconCounter);
        showHideBoardTranslate(arrowIconCounter);
    });
}

function showHideBoardTranslate(counter) {
    counter === 1 ? divGameOver.style.transform = 'translateY(-90%)': divGameOver.style.transform = 'translateY(0px)';
}

function changeGameOverBg(counter) {
    if (counter === 1)
        divGameOver.style.backgroundImage = 'none'; 
    else
        divGameOver.style.backgroundImage = '';
}

function arrowIconChange() {
    if (arrowIconCounter === 0) {
        showBoardBtn.style.transform = 'rotate(180deg)';
        arrowIconCounter = 1;
    } else {
        showBoardBtn.style = '';
        arrowIconCounter = 0;
    }
}