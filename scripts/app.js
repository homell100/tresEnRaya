
const cross = {symbol: '<i class="fas fa-times fa-10x"></i>', className: 'cross'};
const circle = {symbol:'<i class="far fa-circle fa-8x"></i>', className: 'circle'};
let currentPlayer = cross;

$(document).ready(function(){

    $('.cell').click(function(event){
        $(`#${event.target.id}`).unbind('click');
        $(`#${event.target.id}`).append(currentPlayer.symbol);
        $(`#${event.target.id}`).addClass(currentPlayer.className);
        currentPlayer = currentPlayer === cross ? circle : cross;

        $('.turn-indicator').toggle();
        //checkEndGame();
    });
})

// function checkEndGame () {
//     for
//     for
//     if
//     if

// }






