const STATUS = {
    winner: "",
    score: {
        cross: 0,
        circle: 0
    },
    grid: [],
    addPoint: function(player){
        this.score[player] ++;
    },
    clearWinner: function(){
        this.winner = ""
    }

}