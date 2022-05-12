function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function play(playerSelection, computerSelection) {
    let player = convertLower(playerSelection);
    let computer = computerSelection;

    if (player == computer) {
        console.log("It's a Tie!");
        return -1;
    }

    switch (player) {
        case "rock":
            switch (computer) {
                case "paper":
                    console.log("You Lose! Paper beats Rock");
                    return 0;
                case "scissors":
                    console.log("You Win! Rock beats Scissors");
                    return 1;
            }
        case "paper":
            switch (computer) {
                case "rock":
                    console.log("You Win! Paper beats Rock");
                    return 1;
                case "scissors":
                    console.log("You Lose! Scissors beats Paper");
                    return 0;
            }
        case "scissors":
            switch (computer) {
                case "paper":
                    console.log("You Win! Scissors beats Paper");
                    return 1;
                case "rock":
                    console.log("You Lose! Rock beats Scissors");
                    return 0;
            }
        default:
            throw "Invalid Selection!"
    }
}

function convertLower(input) {
    let inputString = String(input);
    return inputString.toLowerCase();
}

function game() {
    let playerScore = 0;
    let compScore = 0;
    let ROUNDS = 5;

    for (let i = 0; i < ROUNDS; i++) {
        let playerSelection = prompt("What's your choice? Rock, Paper, Scissors");
        let computerSelection = computerPlay();
        let winner = play(playerSelection, computerSelection);
        if (winner == 1) {
            playerScore++;
        } else if (winner == 0){
            compScore++;
        }
    }
    console.log(playerScore);
    console.log(compScore);
}