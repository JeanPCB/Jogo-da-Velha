const playAgainDiv = document.querySelector('.playAgainDiv');
const playAgainBtn = document.querySelector('.playAgainBtn');
const body = document.querySelector('body');

function gameOverScreen() {
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
        setTimeout(() => divGameOver.style.transform = 'translateY(-200%)', 1000);
        clearPlays();
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
}