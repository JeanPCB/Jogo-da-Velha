const playAreas = document.querySelectorAll('.playArea');
const divGameOver = document.querySelector('#gameOver');
const endGameForced = document.querySelector('#endGameForced');

const possibleEnds = [
    ['1', '2', '3'],
    ['1', '4', '7'],
    ['1', '5', '9'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['3', '5', '7'],
    ['4', '5', '6'],
    ['7', '8', '9']
];

let counter = 0;
let playerX = [];
let playerO = [];
let isForcedEnd = false;

function mainEventsController() {
    for (let playArea of playAreas) {
        playArea.addEventListener('click', setPlays);
        playArea.addEventListener('click', setActionsDisplay);
        playArea.addEventListener('click', isGameOver);
        playArea.addEventListener('click', gameOverScreen);
    }
}

function isForcedEndGame() {
    endGameForced.addEventListener('click', () => {
        isForcedEnd = true;
        counter = 3;
        gameOverScreen();
        isForcedEnd = false;
    });
}

function setActionsDisplay(e) {
    if (counter == 0) {
        e.target.innerHTML = '<img class="playAreaDisabled" src="./assets/images/crossPlayer.png">';
        e.target.style = 'pointer-events: none';
        counter = 1;
    } else {
        e.target.innerHTML = '<img class="playAreaDisabled" src="./assets/images/circlePlayer.png">';
        e.target.style = 'pointer-events: none';
        counter = 0;
    }
}

function setPlays(e) {
    counter == 0 ? playerX.push(e.target.id) : playerO.push(e.target.id);
}

function lastPlay() {
    if (counter == 0)
        return playerO;
    else
        return playerX;
}

function gameOver(plays) {
    for (let index in possibleEnds) {
        var checkValue = endGameCheck(plays, index);
        if (checkValue)
            break;
    }
    return checkValue;
}

function endGameCheck(plays, index) {
    if (plays.length >= 3) {
        return possibleEnds[index].every(value => {
            return plays.includes(value);
        });
    }
}

function isGameOver() {
    if (lastPlay().length == 5 && gameOver(lastPlay()) == false) {
        counter = 2;
        return true;
    } else if (lastPlay().length >= 3) {
        return gameOver(lastPlay());
    }
}

isForcedEndGame();
mainEventsController();
