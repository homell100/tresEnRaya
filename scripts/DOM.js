const DOM = {
    updateScore: function (player, score) {
        $(`#player-${player}-container .score`).text(score);
    },
<<<<<<< HEAD
    clearGrid: function() {
        console.log("clearGird")
    }
=======
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

>>>>>>> e717cb38652161e83659745a69c23344a035e523
}