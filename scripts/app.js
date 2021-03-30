var { cross, circle } = CONFIG;


$(document).ready(function(){

    startGame()

    // $('#reset-button').click(function(event){

    // })

})

function startGame(){
    //Randomize who starts first
    STATUS.changePlayer(UTILS.makeRandBoolean()? cross: circle);

    console.log('abans de posar el event click');
    $('.cell').click(function(event){
        console.log(STATUS.currentPlayer.className)
        
        // $(`#${event.target.id}`).append(currentPlayer.symbol);
        // $(`#${event.target.id}`).addClass(currentPlayer.className);
        //Unbind the clicked cell

        // Modificar el STATUS.cells segons que s'ha clicat
        var row = $(event.target).attr("data-row")
        var col = $(event.target).attr("data-col")
        DOM.unbindCell(row, col);
        STATUS.updateCells(row, col, STATUS.currentPlayer)
        // "Llegir" la taula que esta a status.cells i dibuixar les caselles
        DOM.updateGrid(STATUS.cells, cross, circle)
        STATUS.changePlayer((STATUS.currentPlayer===circle)? cross: circle)
        DOM.writeTurnIndicator(STATUS.currentPlayer.className);
        STATUS.winner = checkEndGame();

        //Status winner takes circle cross or empty
        if(STATUS.winner){
            // S'ha de "parar el joc"
            console.log("winner",STATUS.winner)

            DOM.showWinner(STATUS.winner);           
            STATUS.addPoint(STATUS.winner);
            DOM.updateScore(STATUS.winner, STATUS.score[STATUS.winner]);

            DOM.showReset()
        }
        
    });

    $('#reset-button').click(function(event){
        console.log('reset')
        // borrar grid and remove winner
        STATUS.clearGrid()
        STATUS.clearWinner()

        // borrar grid
        DOM.reset()

        // Start playing
        startGame()
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






