let humanScore = 0;
let computerScore = 0;

    function getComputerChoice() {
            let arr = ["rock", "paper", "scissors"]
            choice = Math.floor((Math.random() * 3));
            console.log(`Computer choose ${arr[choice]}`);
            return arr[choice];
        }


        function getHumanChoice() {
            let choice = prompt("Enter: Rock, Paper or Scissors");
            console.log(`Human choose ${choice}`)
            return choice;
        }

        const humanSelection = getHumanChoice().toUpperCase();
        const computerSelection = getComputerChoice().toUpperCase();
        console.log(humanSelection);
        console.log(computerSelection);

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
                console.log("You win! Scissors beats Paper")
                humanScore += 1;
            }

            else if((humanChoice == "SCISSORS") && (computerChoice == "ROCK")) {
                console.log("You lose! Rock beats Scissors")
                
            }
            
            else if((humanChoice == "PAPER") && (computerChoice == "SCISSORS")) {
                console.log("You lose! Scissors beats Paper")
            }

            else if((humanChoice == "PAPER") && (computerChoice == "ROCK")) {
                console.log("You win! Paper beats Rock")
            }
        }
        
        playRound(humanSelection, computerSelection);