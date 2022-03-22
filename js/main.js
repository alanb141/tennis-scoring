var scores = [15, 30, 40, 'A']
    player_one_score = -1
    player_two_score = -1
    updated_score = 0
    deuce = false;

function playerScore(a, b){
    player_one_score = a;
    player_two_score = b;
    $('playerone score').html(scores[player_one_score]);
    $('playertwo score').html(scores[player_two_score]);
}

$('#reset').on('click', function(){
    player_one_score = -1
    player_two_score = -1
    updated_score = 0
    deuce = false;
    $('playerone score').html('0');
    $('playertwo score').html('0');
    $('deuce').html('');
})

$('button').not('#reset').on('click', function(){
    if(deuce == false){
        if($(this).parent().prop('nodeName') == 'PLAYERONE'){
            player_one_score++;
            updated_score = player_one_score;
        }else{
            player_two_score++;
            updated_score = player_two_score;
        }
        if((player_one_score >= 4 || player_two_score >= 4) || 
        (player_one_score > 2 && player_two_score <= 1 || player_two_score > 2 && player_one_score <= 1)){
            $('deuce').html($(this).parent().prop('nodeName') + ' IS THE WINNER!');
        }else{
            $(this).parent().children('score').html(scores[updated_score]);
        }
    }
    else{
        deuce = false;
        $('deuce').html('');
        if($(this).parent().prop('nodeName') == 'PLAYERONE'){
            playerScore(3, 2);
        }else{
            playerScore(2, 3);
        }
    }
    
    if(player_one_score == 3 && player_two_score == 3){
        $('score').html('-');
        $('deuce').html('DEUCE!');
        deuce = true;
    }
});