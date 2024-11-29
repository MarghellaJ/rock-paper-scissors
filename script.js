
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); //generates random number

    switch(randomNumber) { //return the String associated with randomNumber
        case 0:
            return "scissors";
        case 1:
            return "rock";
        case 2:
            return "paper";
        default:
            return "Error";
    }    
}

console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors");
    console.log(choice);
}

getHumanChoice();
