const playAgainDiv = document.querySelector( '.playAgainDiv' );
const playAgainBtn = document.querySelector( '.playAgainBtn' );
const body = document.querySelector( 'body' );

function animsPlayAgainBtn() {
    playAgainDiv.addEventListener( 'click', () => {
        playAgainBtn.style.right = '0';
        playAgainDiv.style.backgroundColor = '#000';
    } );
}

function gameOverScreenHeight() {
    divGameOver.style.height = `${body.offsetHeight}px`;
}