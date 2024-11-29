
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber) {
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