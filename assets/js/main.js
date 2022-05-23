const markPlaces = document.querySelectorAll( '.markPlace' );
let counter = 0;
let playsX = [];
let playsO = []

for( let markPlace of markPlaces) {
    markPlace.addEventListener( 'click', setPlays );
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
    counter == 0 ? playsX.push( e.target.id ) : playsO.push( e.target.id );
}

