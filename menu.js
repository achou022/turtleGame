var clicked=false; //set a false global variable for click so hover out doesn't reset the background to none
$(document).ready(function(){ 
    $('form').hide(); //start with arena selection
    $('.arenaBtn').hover(function(){ //hover in will set the background img to the value which represents the img src of that background
        $('.Arena').css('background-image', 'url('+$(this).val()+')');
    }, function(){
        if(clicked==false){ //hover out will reset the background img to nothing or black in this use case
            $('.Arena').css('background-image', 'none');
        }
    }); 
    $('button').click(function(){
        clicked = true; //utilize global variable to stop hover out from resetting background
        $('button').hide(); //hides the arena stage button to show the char selection menu
        $('form').show();
        $('.Arena').css('background-image', 'url('+$(this).val()+')');
    });
    $('.player1').change(function(){// console.log($(this).val()); //going in checked
        $('.playground1').css('background-image', 'url('+$(this).val()+')'); //set player 1 char
    });
    $('.player2').change(function(){ // console.log($(this).val()); //going in checked
        $('.playground2').css('background-image', 'url('+$(this).val()+')'); //set player 2 char
    });
});
//can be shorter with a function for setting background img