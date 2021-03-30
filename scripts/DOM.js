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

    clearGrid: function() {
        $(".cell").empty();
    },

    updateGrid(cells, cross, circle){
        console.log(cross, circle)
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
    toggleTurnIndicator: function(){
        $('.turn-indicator').toggle();
    }

}