function getComputerChoice() {
   const randomNumber = Math.floor(Math.random() * 3); //generates random number
   if (randomNumber === 0) {
      return "rock";
   } else if ( randomNumber === 1) {
      return "paper";
   } else {
      return "scissors";
   }
}
    
   

    let humanScore = 0;
    let computerScore = 0;
    let scores = ['humanScore', 'computerScore'];
   function playGame() {
      // result board
      const res = document.querySelector('.results');
      const player = document.createElement('div');
      const computer = document.createElement('div');

      res.appendChild(player);
      res.appendChild(computer);

    function playRound(humanChoice, computerChoice) {
      //   humanChoice = humanChoice.toLowerCase()
        if (humanChoice === computerChoice) { // check for tie
            console.log('It\'s a TIE!');
        }
        if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
            
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            // return "human";
            humanScore += 1;
        } 
        else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper") { {
            console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
            // return "computer";
            computerScore +=1;
            
        }
        
   }
      player.textContent = `Player: ${humanScore}`;
      computer.textContent = `Computer: ${computerScore}`;
      

      // main game logic: loop through till someone has 5 points
      if (humanScore === 5) {
         alert(`You win the game! Final score:\nHuman: ${humanScore}\nComputer: ${computerScore}`); 
         humanScore = 0;
         computerScore = 0;
      } else if (computerScore === 5) {
         alert(`Computer wins the game! Final score:\nHuman: ${humanScore}\nComputer: ${computerScore}`); 
         humanScore = 0;
         computerScore = 0;
      }
    }
   //  player.textContent = `Player: ${humanScore}`;
   //  computer.textContent = `Computer: ${computerScore}`;

   const rock = document.querySelector('#rock');
   rock.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        playRound('rock', computerSelection);
   });

   const paper = document.querySelector('#paper');
   paper.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        playRound('paper', computerSelection);
   });

   const scissors = document.querySelector('#scissors');
   scissors.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        playRound('scissors', computerSelection);
   });

    
   }

//start the game
playGame();