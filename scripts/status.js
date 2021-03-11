const STATUS = {
    winner: "",
    score: {
        cross: 0,
        circle: 0
    },
    addPoint: function(player){
        this.score[player] ++;
    }

}