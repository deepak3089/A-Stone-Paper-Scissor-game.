let userScore=0;
let compScore=0;
let newGameBtn = document.querySelector("#new-button");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

 const newGame =() => {
  userScorepara.innerHTML ="0";
  compScorepara.innerHTML ="0";
 };
 
const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

 const drawGame = () => {
    msg.innerText = "Game was Draw. Play again."
    msg.style.backgroundColor = "red";
 };

 const showWinner =(userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win ! Your ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose ! Your ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red ";
    }
 };

const playGame = (userChoice) => {
    //generate comp choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //draw game
        drawGame();
    } else {
      let userWin = true; 
      if(userChoice === "rock"){
        //scissors,paper
        userWin = compChoice === "paper" ? false:true; 
      } else if (userChoice === "paper") {
        //rock,scissors
        userWin = compChoice ==="scissors" ? false:true;   
      }else { 
        //rock.paper 
        userWin = compChoice === "rock" ? false :true;
      }
      showWinner(userWin,userChoice,compChoice);
    } 
};

choices.forEach((choice) =>{ 
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
newGameBtn.addEventListener("click",newGame);
