const STATUS = {
    cross : {symbol: '<i class="fas fa-times fa-10x"></i>', className: 'cross', picture:"X"},
    circle : {symbol:'<i class="far fa-circle fa-8x"></i>', className: 'circle', pciture:"O"},
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
    chooseRndPlayer: function(){
        this.currentPlayer = this.cross
    },
    changePlayer: function(){
        this.currentPlayer = this.currentPlayer == this.circle? this.cross : this.circle
    },
    updateCells: function(x, y, player){
        this.cells[x][y] = player.picture
    },

    addPoint: function(player){
        this.score[player] ++;
    },

    
}