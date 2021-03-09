
const cross = {symbol: '<i class="fas fa-times fa-10x"></i>', className: 'cross'};
const circle = {symbol:'<i class="far fa-circle fa-8x"></i>', className: 'circle'};
let currentPlayer = cross;

$(document).ready(function(){

    $('.cell').click(function(event){
        $(`#${event.target.id}`).unbind('click');
        $(`#${event.target.id}`).append(currentPlayer.symbol);
        $(`#${event.target.id}`).addClass(currentPlayer.className);
        currentPlayer = currentPlayer === cross ? circle : cross;

        $('.turn-indicator').toggle();
        checkEndGame();
        if(STATUS.winner){
            alert(STATUS.winner)
        }
        
    });
})

function checkEndGame () {
    //Rows
    //Horitzontal
    for(row of [1,2,3]){
        var count = 0;
        for(col of [1,2,3]){
            if($(`div.cell[data-row="${row}"][data-col="${col}"]`).hasClass("cross")){
                count ++;
            }
            if($(`div.cell[data-row="${row}"][data-col="${col}"]`).hasClass("circle")){
                count --;
            }
       }
       if(count == 3){
           STATUS.winner = "cross"

       }
       if(count == -3){
           STATUS.winner ="circle"
       }
       console.log("fila", row, "vale", count)
    }
    //Cols
    for(col of [1,2,3]){
        var count = 0;
        for(row of [1,2,3]){
            if($(`div.cell[data-row="${row}"][data-col="${col}"]`).hasClass("cross")){
                count ++;
            }
            if($(`div.cell[data-row="${row}"][data-col="${col}"]`).hasClass("circle")){
                count --;
            }
       }
       if(count == 3){
           STATUS.winner = "cross"

       }
       if(count == -3){
           STATUS.winner ="circle"
       }
       console.log(count)
    }

    //Principal diagonal
    var count = 0;
    for(i of [1,2,3]){
        
        if($(`div.cell[data-row="${i}"][data-col="${i}"]`).hasClass("cross")){
            count ++;
        }
        if($(`div.cell[data-row="${i}"][data-col="${i}"]`).hasClass("circle")){
            count --;
        }
    }
    if(count == 3){
        STATUS.winner = "cross"

    }
    if(count == -3){
        STATUS.winner ="circle"
    }
    count = 0;
    //Secondary diagonal
    for(i of [1,2,3]){
        
        if($(`div.cell[data-row="${i}"][data-col="${4-i}"]`).hasClass("cross")){
            count ++;
        }
        if($(`div.cell[data-row="${i}"][data-col="${4-i}"]`).hasClass("circle")){
            count --;
        }
    }
    if(count == 3){
        STATUS.winner = "cross"

    }
    if(count == -3){
        STATUS.winner ="circle"
    }
}






