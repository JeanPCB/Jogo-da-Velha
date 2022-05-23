const markPlaces = document.querySelectorAll( '.markPlace' );
let counter = 0;
let playerX = [];
let playerO = [];
const possibleEnds = [
    [ '1', '2', '3' ],
    [ '1', '4', '7' ],
    [ '1', '5', '9' ],
    [ '2', '5', '8' ],
    [ '3', '6', '9' ],
    [ '3', '5', '7' ],
    [ '4', '5', '6' ],
    [ '7', '8', '9' ]
];

for( let markPlace of markPlaces) {
    markPlace.addEventListener( 'click', setPlays );
    markPlace.addEventListener( 'click', () => {
        if( playerTurn().length >= 3) {
            console.log( gameOver( playerTurn() ) );
        }
    });
    markPlace.addEventListener( 'click', setActionsDisplay );
}

function setActionsDisplay( e ) {
    if( counter == 0 ) {
        e.target.innerHTML = '<img class="markPlaceDisabled" src="./assets/images/cross-sign-element-red-x-260nw-567030823.webp">';
        e.target.style = 'pointer-events: none';
        counter = 1;
    } else {
        e.target.innerHTML = '<img class="markPlaceDisabled" src="./assets/images/download.png">';
        e.target.style = 'pointer-events: none';
        counter = 0;
    }
}

function setPlays( e ) {
    counter == 0 ? playerX.push( e.target.id ) : playerO.push( e.target.id );
}

function playerTurn() {
    if( counter == 0 )
        return playerX;
    else
        return playerO;
}

function gameOver( plays ) {
    for( let index in possibleEnds ){
      var checkValue = endGameCheck( plays, index );
      if( checkValue )
          break;
    }
    return checkValue;
}

function endGameCheck( plays, index ) {
    if( plays.length >= 3 ) {
        return possibleEnds[index].every( value => {
            return plays.includes( value );
        } );
    }
}