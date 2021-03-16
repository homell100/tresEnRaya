const STATUS = {
    winner: "",
    score: {
        cross: 0,
        circle: 0
    },
    cells: [
        ['','',''],
        ['','',''],
        ['','','']
    ],

    addPoint: function(player){
        this.score[player] ++;
    },

    
}