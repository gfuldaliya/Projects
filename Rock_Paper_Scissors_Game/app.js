let user_Score = 0;
let comp_Score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_count = document.querySelector("#user-score");
const comp_count = document.querySelector("#computer-score");

const genCompChoice = () => {
    const comOptions = ["rock","paper","scissors"];
    const randomIndx = Math.floor(Math.random() * 3);
    return comOptions[randomIndx];
};

const showWinner = (userWin , userChoice , compuChoice) => {
    if(userWin){
        user_Score++;
    msg.innerText = `You Win. ${userChoice} beats ${compuChoice}`;
    msg.style.backgroundColor = "Green";
    user_count.innerText = user_Score;

    }
    else{
        comp_Score++;
        msg.innerText = `You Lose. ${compuChoice} beats ${userChoice}`
        msg.style.backgroundColor = "Red";
        comp_count.innerText = comp_Score;
    }
};



const playGame = (userChoice) => {
    //Generate Computer Choice
    const compuChoice = genCompChoice();
    if(userChoice === compuChoice){
        drawGame();
    }
    else{
        let userWin =  true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compuChoice ==="paper" ? false : true;
        }else if(userChoice === "paper"){
        // rock, scisscors
        userWin = compuChoice === "scissors" ? false : true ;
        }else{
            // rock , paper
            userWin = compuChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compuChoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const drawGame = () => {
    msg.innerText = "Game was Draw!!";
    msg.style.backgroundColor = "#2B303A";
};
