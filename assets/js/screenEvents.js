const playAgainDiv = document.querySelector( '.playAgainDiv' );
const playAgainBtn = document.querySelector( '.playAgainBtn' );
const body = document.querySelector( 'body' );

function gameRestart() {
    playAgainDiv.addEventListener( 'click', () => {
        playAgainBtn.style.right = '0';
        playAgainDiv.style.backgroundColor = '#000';        setTimeout( () => divGameOver.style.transform = 'translateY(-200%)', 1000 );
        setTimeout( clearBoard, 1000 );
    } );
}

function gameOverScreenHeight() {
    divGameOver.style.height = `${body.offsetHeight}px`;
}