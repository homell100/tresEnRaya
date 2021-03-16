var { cross, circle } = CONFIG;

//Randomize who starts first
STATUS.changePlayer(UTILS.makeRandBoolean()? cross: circle);

$(document).ready(function(){

    startGame()

    $('#reset-button').click(function(event){
        // borrar grid
        DOM.reset()
        //Remove winner
        STATUS.clearWinner()
        // Start playing
        startGame()
        $('#reset-button').hide();
    })

})

function startGame(){
    $('.cell').click(function(event){
        console.log(STATUS.cells);
        // $(`#${event.target.id}`).unbind('click');
        // $(`#${event.target.id}`).append(currentPlayer.symbol);
        // $(`#${event.target.id}`).addClass(currentPlayer.className);
        //Unbind the clicked cell

        // Modificar el STATUS.cells segons que s'ha clicat
        var row = $(event.target).attr("data-row")
        var col = $(event.target).attr("data-col")
        STATUS.updateCells(row, col, STATUS.currentPlayer)
        // "Llegir" la taula que esta a status.cells i dibuixar les caselles
        DOM.updateCells(STATUS.cells, {cross: cross.symbol, circle: circle.symbol})
        STATUS.changePlayer((STATUS.currentPlayer===circle)? cross: circle)
        
        $('.turn-indicator').toggle();
        // checkEndGame();
        //Status winner takes circle cross or empty
        if(STATUS.winner){
            console.log("winner",STATUS.winner)
            // S'ha de "parar el joc"
            DOM.removeClicks()
            //S'han de treure marcadors dels torns
            DOM.removeTurnMessage()
            //S'ha de dir qui ha guanyat
            DOM.writeWinnerMessage(STATUS.winner)
            //Sumar-li un punt
            STATUS.addPoint(STATUS.winner);
            //Update DOM
            DOM.updateScore(STATUS.winner, STATUS.score[STATUS.winner]);

            DOM.showReset()
        }
        
    });

    $('#reset-button').click(function(event){
        // borrar grid
        STATUS.clearGrid()
        DOM.updateGrid()
        // afegir evnets a les cel·les
        $('#reset-button').hide();
    })

}

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






