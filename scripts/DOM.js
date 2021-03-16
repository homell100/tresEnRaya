const DOM = {
    updateScore: function (player, score) {
        $(`#player-${player}-container .score`).text(score);
    },
    removeClicks: function(){
        $('.cell').unbind('click')
    },
    removeTurnMessage: function(){
        $('.turn-indicator').hide();
    },
    writeWinnerMessage: function(player){
        $(`#player-${player}-container .message-wrapper`).append("<p> You won </p>");
    },
    reset: function(){
        this.clearGrid()
        this.removeWinnerMessage()
    },
    removeWinnerMessage: function(){
        $(".player-container .message-wrapper").empty()
    },
    showReset: function(){
        $('#reset-button').show();
    },
    hideReset: function(){
        $('#reset-button').hide();
    },
    updateCells(cells){
        //cells is an array of arrays with "", O or X
        //We need give children to the cells, depending on the values of cells[x,y]
        for(var i=0; i<3; i++ ){
            for(var j= 0; j<3; j++){
                //$(this).attr("data-id")
                // $('.cell["data-row"=0  =  cells[i][j]
            }
        }
    }

}