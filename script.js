
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); //generates random number

    if (randomNumber === 0) {
        return "rock";
    } 
    if ( randomNumber === 1) {
        return "paper";
    } 
    else {
        return "scissors";
    }
}


function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors").toLowerCase(); //prompt window asking for user input

    if (choice === "rock") {
        return "rock";
    }
    if (choice === "paper") {
        return "paper";
    }
    if (choice === "scissors") {
        return "scissors";
    }
    else {
        return 
    }
}








function playGame() {
    while (humanScore <= 5 && computerScore <= 5) {
        function playRound(humanChoice, computerChoice) {
            humanChoice = humanChoice.toLowerCase()
            if (humanChoice === computerChoice) {
                alert('It\'s a TIE!');
                alert('You both lose...');
                alert(`${humanChoice} is equal to ${computerChoice}`);
                alert(`Player Score: ${humanScore}\n Computer Score: ${computerScore}`);
            }
        
            if (humanChoice != computerChoice) {
                if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
                    humanScore++
                    alert('You win!');
                    alert(`Computer chose ${computerChoice}`);
                    alert(`${humanChoice} beats ${computerChoice}...`)
                    alert(`Good Job!`);
                    alert(` Player Score: ${humanScore}\n Computer Score: ${computerScore}`);
        
                } 
                else {
                    computerScore++
                    alert('Computer wins!');
                    alert(`Computer chose ${computerChoice}`)
                    alert(` ${computerChoice} beats ${humanChoice}...`);
                    alert('What a loser!');
                    alert(` Player Score: ${humanScore}\n Computer Score: ${computerScore}`);
                }
            }
            
        }
    }
    playRound(humanSelection, computerSelection);
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();