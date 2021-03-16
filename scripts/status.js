const STATUS = {
   currentPlayer: "",
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

    changePlayer: function(player){
        this.currentPlayer = player
    },
    updateCells: function(x, y, player){
        console.log('x',x,'y',y,player);
        this.cells[x][y] = player.picture
    },

    addPoint: function(player){
        this.score[player] ++;
    },

    
}