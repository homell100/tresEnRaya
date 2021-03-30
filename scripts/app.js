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
        DOM.updateGrid(STATUS.cells, cross, circle)
        STATUS.changePlayer((STATUS.currentPlayer===circle)? cross: circle)
        DOM.toggleTurnIndicator()
        STATUS.winner = checkEndGame();
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
        DOM.updateGrid(STATUS.cells, cross, circle)
        // afegir evnets a les cel·les
        DOM.hideReset()
    })

}

function checkEndGame () {
    //Rows
    //Horitzontal
    for(row of [0,1,2]){
        var count = 0;
        for(col of [0,1,2]){
            // if($(`div.cell[data-row="${row}"][data-col="${col}"]`).hasClass("cross")){
            //     count ++;
            // }
            if(STATUS.cells[row][col] == CONFIG.cross.picture) count ++
            if(STATUS.cells[row][col] == CONFIG.circle.picture) count --
       }
       if(count == 3)
           return CONFIG.cross.className

       if(count == -3){
           return CONFIG.circle.className
       }
    }
    //Cols
    for(col of [0,1,2]){
        var count = 0;
        for(row of [0,1,2]){
            if(STATUS.cells[row][col] == CONFIG.cross.picture) count ++
            if(STATUS.cells[row][col] == CONFIG.circle.picture) count --
       }
       if(count == 3){
            return CONFIG.cross.className

       }
       if(count == -3){
        return CONFIG.circle.className
       }
    }

    //Principal diagonal
    var count = 0;
    for(i of [0,1,2]){
        if(STATUS.cells[i][i] == CONFIG.cross.picture) count ++
        if(STATUS.cells[i][i] == CONFIG.circle.picture) count --
       
    }
    if(count == 3)  return CONFIG.cross.className
    if(count == -3) return CONFIG.circle.className
    count = 0;
    //Secondary diagonal
    for(i of [0,1,2]){
        if(STATUS.cells[i][2-i] == CONFIG.cross.picture) count ++
        if(STATUS.cells[i][2-i] == CONFIG.circle.picture) count --
    }
    if(count == 3)  return CONFIG.cross.className
    if(count == -3) return CONFIG.circle.className
}






