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
    clearGrid: function (){
        $(".cell").empty()
    },
    removeWinnerMessage: function(){
        $(".player-container .message-wrapper").empty()
    },
    showReset: function(){
        $('#reset-button').show();
    }

}