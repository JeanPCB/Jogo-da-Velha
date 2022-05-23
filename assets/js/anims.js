const playAgainDiv = document.querySelector( '.playAgainDiv' );
const playAgainBtn = document.querySelector( '.playAgainBtn' );

function animsPlayAgainBtn() {
    playAgainDiv.addEventListener( 'mouseover', () => {
        playAgainBtn.style.right = '0';
    } );

    playAgainDiv.addEventListener( 'mouseout', () => {
        playAgainBtn.style.right = '100%';
    } );
}

animsPlayAgainBtn();