let userScore=0;
let botScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const botScorePara=document.querySelector("#bot-score");
const resetBtn=document.querySelector("#reset-btn");

const genBotChoice=()=>{
    const options=["rock","paper","scissor"];
    const radIdx=Math.floor(Math.random()*3);
    return options[radIdx];
}

const drawGame=()=>{
    msg.innerText="TIE! Play Again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,botChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Won! Your ${userChoice} beats ${botChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        botScore++;
        botScorePara.innerText=botScore;
        msg.innerText=`You Lose! ${botChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const resetGame=()=>{
    resetBtn.classList.remove("hide");
}

const playGame=(userChoice)=>{
    const botChoice=genBotChoice();
    if(userChoice===botChoice){
        drawGame();
        resetGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=botChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=botChoice==="scissor"?false:true;
        }
        else{
            userWin=botChoice==="rock"?false:true;
        }
        resetGame();
        showWinner(userWin,userChoice,botChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})
