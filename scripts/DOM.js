const DOM = {
    updateScore: function (player, score) {
        console.log(player, score);
        $(`#player-${player}-container .score`).text(score);
    }

    clearGrid: function ()

}