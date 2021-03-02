$(document).ready(function(){
    $('.cell').click(function(event){
        $(`#${event.target.id}`).css('backgroundColor', "green")   
    });
})





