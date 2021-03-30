const DOM = {
    updateScore: function (player, score) {
        $(`#player-${player}-container .score`).text(score);
    },
    unbindCell: function(row, col) {
        $(`.cell[data-row="${row}"][data-col="${col}"]`).unbind('click');
    },

    unbindCellClicks: function(){
        $('.cell').unbind('click')
    },
    unbindResetClicks: function(){
        $('#reset-button').unbind('click')
    },
    removeTurnMessage: function(){
        $('.turn-indicator').empty();
    },
    writeWinnerMessage: function(player){
        $(`#player-${player}-container .message-wrapper`).append("<p>You won :D</p>");
    },
    writeTurnIndicator: function(player){
        console.log('entra', player);
        $(`.turn-indicator`).empty();
        $(`#player-${player}-container .turn-indicator`).append("<p>It's your turn, mate!</p>");
    },
    reset: function(){
        this.clearGrid()
        this.removeWinnerMessage()
        this.hideReset()
        this.unbindResetClicks()
    },

    removeWinnerMessage: function(){
        $(".player-container .message-wrapper").empty()
    },
    showReset: function(){
        $('#reset-button').show();
    },

    showWinner: function(winner){
        DOM.unbindCellClicks()
        //S'han de treure marcadors dels torns
        DOM.removeTurnMessage()
        //S'ha de dir qui ha guanyat
        DOM.writeWinnerMessage(winner)    
    },

    hideReset: function(){
        $('#reset-button').hide();
    },

    clearGrid: function() {
        $(".cell").empty();
    },

    updateGrid(cells, cross, circle){
        //cells is an array of arrays with "", O or X
        //We need give children to the cells, depending on the values of cells[x,y]
        this.clearGrid()
        for(var i=0; i<3; i++ ){
            for(var j= 0; j<3; j++){
                if (cells[i][j] === cross.picture){
                    $(`[data-row=${i}][data-col=${j}]`).append(cross.symbol);
                }
                if (cells[i][j] === circle.picture){
                    $(`[data-row=${i}][data-col=${j}]`).append(circle.symbol);
                }
            }
        }
    },



}