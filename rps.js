var options = ["Rock" , "Paper" , "Scissors"];
function gameBegins(){
    var  gameStartContainer = document.getElementById("gameStart");
    var  userCallContainer = document.getElementById("user-call-buttons");
    gameStartContainer.style.display = "none";
    userCallContainer.style.display = "block";

}

function computerCall(){
    var random = Math.random();
    if(random < 0.334){
        return options[0]
    }
    else if(random < 0.667){
        return options[1]
    }
    else{
        return options[2]
    }
}

function userCall(userSelected){
    var computerSelected = computerCall();
    var textResult = document.getElementById("text-result");

    var  userCallContainer = document.getElementById("user-call-buttons");
    userCallContainer.style.display = "none";
    textResult.style.display = "block   ";

    if(userSelected === computerSelected ){
        textResult.innerText = "Draw where compture selection is : " + computerSelected;
    }
    else if(userSelected === options[0] && computerSelected === options[2] || userSelected === options[1] && computerSelected === options[0] || userSelected === options[2] && computerSelected === options[1] ){
        textResult.innerText = "User Win where compture selection is : " + computerSelected ;
    }
    else{textResult.innerText = "computer Win where compture selection is : " + computerSelected};

    var restartContainer = document.getElementById("restart");
    restartContainer.style.display = "block";
}

function restart(){
    var  gameStartContainer = document.getElementById("gameStart");
    gameStartContainer.style.display = "block";
        var restartContainer = document.getElementById("restart");
    restartContainer.style.display = "none";
    var textResult = document.getElementById("text-result");
    textResult.style.display = "none";

}

