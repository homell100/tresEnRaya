
const cross = {symbol: '<i class="fas fa-times fa-10x"></i>', className: 'cross'};
const circle = {symbol:'<i class="far fa-circle fa-8x"></i>', className: 'circle'};
let currentPlayer = cross;

$(document).ready(function(){

    $('.cell').click(function(event){
        $(`#${event.target.id}`).unbind('click');
        // $(`#${event.target.id}`).append(currentPlayer.symbol);
        // $(`#${event.target.id}`).addClass(currentPlayer.className);
        // Modificar el STATUS.cells segons que s'ha clicat
        // "Llegir" la taula que esta a status.cells i dibuixar les caselles
        currentPlayer = currentPlayer === cross ? circle : cross;
        
        $('.turn-indicator').toggle();
        checkEndGame();
        //Status winner takes circle cross or empty
        if(STATUS.winner){
         
            console.log(STATUS.winner)
            // S'ha de "parar el joc"
            $('.cell').unbind('click')
            //S'han de treure marcadors dels torns
            $('.turn-indicator').hide();

            //S'ha de dir qui ha guanyat
            $(`#player-${STATUS.winner}-container`).append("<p> You won </p>");
            console.log('before adding point');
            STATUS.addPoint(STATUS.winner);
            console.log('afteradding point', STATUS.score);
            //Sumar-li un punt
            DOM.updateScore(STATUS.winner, STATUS.score[STATUS.winner]);

            $('#reset-button').show();
        }
        
    });

    $('#reset-button').click(function(event){
        // borrar grid
        STATUS.clearGrid()
        DOM.updateGrid()
        // afegir evnets a les cel·les
        $('#reset-button').hide();
    })

})

function checkEndGame () {
    //Rows
    //Horitzontal
    for(row of [1,2,3]){
        var count = 0;
        for(col of [1,2,3]){
            if($(`div.cell[data-row="${row}"][data-col="${col}"]`).hasClass("cross")){
                count ++;
            }
            if($(`div.cell[data-row="${row}"][data-col="${col}"]`).hasClass("circle")){
                count --;
            }
       }
       if(count == 3){
           STATUS.winner = "cross"

       }
       if(count == -3){
           STATUS.winner ="circle"
       }
    }
    //Cols
    for(col of [1,2,3]){
        var count = 0;
        for(row of [1,2,3]){
            if($(`div.cell[data-row="${row}"][data-col="${col}"]`).hasClass("cross")){
                count ++;
            }
            if($(`div.cell[data-row="${row}"][data-col="${col}"]`).hasClass("circle")){
                count --;
            }
       }
       if(count == 3){
           STATUS.winner = "cross"

       }
       if(count == -3){
           STATUS.winner ="circle"
       }
       console.log(count)
    }

    //Principal diagonal
    var count = 0;
    for(i of [1,2,3]){
        
        if($(`div.cell[data-row="${i}"][data-col="${i}"]`).hasClass("cross")){
            count ++;
        }
        if($(`div.cell[data-row="${i}"][data-col="${i}"]`).hasClass("circle")){
            count --;
        }
    }
    if(count == 3){
        STATUS.winner = "cross"

    }
    if(count == -3){
        STATUS.winner ="circle"
    }
    count = 0;
    //Secondary diagonal
    for(i of [1,2,3]){
        
        if($(`div.cell[data-row="${i}"][data-col="${4-i}"]`).hasClass("cross")){
            count ++;
        }
        if($(`div.cell[data-row="${i}"][data-col="${4-i}"]`).hasClass("circle")){
            count --;
        }
    }
    if(count == 3){
        STATUS.winner = "cross"

    }
    if(count == -3){
        STATUS.winner ="circle"
    }
}






