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
            if((humanChoice || computerChoice) == "ROCK" && (humanChoice || computerChoice) == "PAPER") {
                console.log("Paper beats Rock");
            }

            else if((humanChoice || computerChoice) == "ROCK" && (humanChoice || computerChoice) == "SCISSORS") {
                console.log("Rock beats Scissors");
            }

            else if ((humanChoice || computerChoice) == "ROCK" && (humanChoice || computerChoice) == "PAPER") {
                console.log("Scissors beat Paper")
            }
        }
        
        playRound(humanSelection, computerSelection);