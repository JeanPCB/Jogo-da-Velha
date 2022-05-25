const playAgainDiv = document.querySelector('.playAgainDiv');
const playAgainBtn = document.querySelector('.playAgainBtn');
const body = document.querySelector('body');
const gameOverCause = document.querySelector('#gameOverCause');

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
        divGameOver.style.transform = 'translateY(0)';
    }
}

function gameRestart() {
    playAgainDiv.addEventListener('click', () => {
        playAgainBtn.style.right = '0';
        playAgainDiv.addEventListener('mouseover', () => {
            playAgainDiv.style.backgroundColor = '#000';
        });
        playAgainDiv.addEventListener('mouseout', () => {
            playAgainDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        });
        clearPlays();
        setTimeout(() => divGameOver.style.transform = 'translateY(-200%)', 1000);
        setTimeout(clearBoard, 1000);
        setTimeout(resetActionsDisplay, 1000);
        setTimeout(resetRestartBtnAnim, 2000);
    });
}

function resetRestartBtnAnim() {
    playAgainBtn.style.right = '100%';
}

function clearBoard() {
    for (let markPlace of markPlaces) {
        markPlace.innerHTML = '';
    }
}

function gameOverScreenHeight() {
    divGameOver.style.height = `${body.offsetHeight}px`;
}

function resetActionsDisplay() {
    for (let markPlace of markPlaces) {
        markPlace.style = 'pointer-events = default';
    }
}

function clearPlays() {
    playerX = [];
    playerO = [];
    counter = 0;
}