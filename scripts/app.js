
const cross = '<i class="fas fa-times fa-10x"></i>';
const circle = '<i class="far fa-circle fa-8x"></i>';
let currentSymbol = cross;

$(document).ready(function(){

    $('.cell').click(function(event){
        $(`#${event.target.id}`).append(currentSymbol);
        currentSymbol = currentSymbol === cross ? circle : cross;
        
    });
})





