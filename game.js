var userClickedPattern=[];
var gamePattern=[];
var buttonColours = ["red", "blue", "green","yellow"];
var start=false;
var level=0 ;

$(document).on('keydown',function(event){

    if(!start){
     nextSequence();
     start = true;
    }
    
});

function nextSequence(){
    userClickedPattern=[];
    level++;
    $("h1").text("level "+level);
     var randomNumber;
     randomNumber = Math.floor(Math.random()*4);
     var classColour=buttonColours[randomNumber];
     gamePattern.push(classColour);
     var pressed = $("#"+ classColour).addClass("pressed");
     setTimeout(function() {
         pressed.removeClass("pressed");
         makeSound(classColour);
     }, 200);
}

function makeSound(classColour){
    switch(classColour){

    case "red":
        var red = new Audio("./sounds/red.mp3");
        red.play();
    break;

    case "blue":
        var blue = new Audio("./sounds/blue.mp3");
        blue.play();
    break;

    case "green":
        var green = new Audio("./sounds/green.mp3");
        green.play();
    break;

    case "yellow":
        var yellow = new Audio("./sounds/yellow.mp3");
        yellow.play();
    break;

    default:
        console.log("error");
        break;

}}

$("#red").on('click', function(){
    var userChosenColour = $(this).attr('id');
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

$("#yellow").on('click', function(){
    var userChosenColour = $(this).attr('id');
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

$("#green").on('click', function(){
    var userChosenColour = $(this).attr('id');
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

$("#blue").on('click', function(){
    var userChosenColour = $(this).attr('id');
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function playSound(userChosenColour){
    switch(userChosenColour)
    {

        case "red":
            var red = new Audio("./sounds/red.mp3");
            red.play();
        break;
    
        case "blue":
            var blue = new Audio("./sounds/blue.mp3");
            blue.play();
        break;
    
        case "green":
            var green = new Audio("./sounds/green.mp3");
            green.play();
        break;
    
        case "yellow":
            var yellow = new Audio("./sounds/yellow.mp3");
            yellow.play();
        break;
    
        default:
            console.log("error");
            break;
    
    }
}

function animatePress(currentColour){
    var pressed1 = $("#"+ currentColour).addClass("pressed");
    setTimeout(function() {
        pressed1.removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    let h=0
    for(h=0;h<=currentLevel;h++){
        if(userClickedPattern[h]!==gamePattern[h]){
            $("h1").text("Game Over, Press Any Key 2 times to Restart");
            var wrong = new Audio("./sounds/wrong.mp3");
            wrong.play();
            var wrongbody = $("body").addClass("game-over");
            setTimeout(function(){
                wrongbody.removeClass("game-over");
            }, 200);
            $(document).on('keydown',function(event){
                startOver();
            });
            return;
        } 
    }
    if(currentLevel===gamePattern.length-1){
        setTimeout(function () {
            nextSequence();
        }, 1000);
        }
}

function startOver(){
    gamePattern=[];
    level=0;
    userClickedPattern=[];
    start=false;

    $(document).off('keydown');

    // Add a new keydown event handler to start the game
    $(document).keydown (function () {
        if (!start) {
            start = true;
            nextSequence();
        }
    });
}