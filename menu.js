var clicked=false;
$(document).ready(function(){ 
    $('form').hide();
    $('.arenaBtn').hover(function(){
        $('.Arena').css('background-image', 'url('+$(this).val()+')');
    }, function(){
        if(clicked==false){
            $('.Arena').css('background-image', 'none');
        }
    }); 
    $('button').click(function(){
        clicked = true;
        $('button').hide();
        $('form').show();
        $('.Arena').css('background-image', 'url('+$(this).val()+')');
    });
    $('.player1').change(function(){// console.log($(this).val()); //going in checked
        $('.playground1').css('background-image', 'url('+$(this).val()+')');
    });
    $('.player2').change(function(){ // console.log($(this).val()); //going in checked
        $('.playground2').css('background-image', 'url('+$(this).val()+')');
    });
});
