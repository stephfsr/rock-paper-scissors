function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function getHumanChoice() {
    let userInput = prompt("Rock, paper, or scissors?");
    return userInput ? userInput.toLowerCase() : "";
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        let humanChoice = getHumanChoice();
        
        
        if (humanChoice === "") {
            console.log("Game canceled.");
            return;
        }

        const computerChoice = getComputerChoice();
        console.log(`Round ${i}: You chose ${humanChoice}, Computer chose ${computerChoice}`);
        playRound(humanChoice, computerChoice);
        console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
    }

    
    console.log("Final Result:");
    if (humanScore > computerScore) {
        console.log("You won the game! 🎉");
    } else if (humanScore < computerScore) {
        console.log("You lost the game. 😢");
    } else {
        console.log("It's a draw! 🤝");
    }
}

playGame();
