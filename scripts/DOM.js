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
        console.log('ad');
    },

    updateCells(cells, symbols){
        //cells is an array of arrays with "", O or X
        //We need give children to the cells, depending on the values of cells[x,y]
        for(var i=0; i<3; i++ ){
            for(var j= 0; j<3; j++){
                if (cells[i][j] === 'X'){
                    $(`[data-row=${i}][data-col=${j}]`).append(symbols.cross);
                }
                if (cells[i][j] === 'O'){
                    $(`[data-row=${i}][data-col=${j}]`).append(symbols.circle);
                }
            }
        }
    }

}