let humanScore = 0;
let computerScore = 0;
const choices = ["ROCK", "PAPER", "SCISSORS"];

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

    function getComputerChoice() {
            let choice = Math.floor((Math.random() * 3));
            console.log(`Computer chose ${choices[choice]}`);
            return choices[choice];
        }


        function getHumanChoice() {
            let choice = prompt("Enter: Rock, Paper or Scissors").toUpperCase();
            if(choices.includes(choice)) {
                console.log(`Human chose ${choice}`)
                return choice;
            }
            console.log("Invalid choice, please enter Rock, Paper, or Scissors.");
            return getHumanChoice()
        }

        function playRound(humanChoice, computerChoice) {
            if((humanChoice == "ROCK") && (computerChoice == "PAPER")) {
                console.log("You lose! Paper beats Rock");
                computerScore += 1;
            }

            else if((humanChoice == "ROCK") && (computerChoice == "SCISSORS")) {
                console.log("You win! Rock beats Scissors");
                humanScore += 1;
            }

            else if((humanChoice == "SCISSORS") && (computerChoice == "PAPER")) {
                console.log("You win! Scissors beats Paper");
                humanScore += 1;
            }

            else if((humanChoice == "PAPER") && (computerChoice == "ROCK")) {
                console.log("You win! Paper beats Rock");
                humanScore += 1;
            }

            else if(humanChoice == computerChoice) {
                console.log(`Its a tie! You both choose ${humanChoice[0] + humanChoice.slice(1).toLowerCase()}`);
            }

            else {
                console.log(`You lose! ${computerChoice[0] + computerChoice.slice(1).toLowerCase()} beats ${humanChoice[0] + humanChoice.slice(1).toLowerCase()}`);
                computerScore += 1;
            }    
        }

for(let i = 0; i < 5; i++) {
    playGame();
}
console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}`);