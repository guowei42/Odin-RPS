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
        //console.log("It's a Tie!");
        return -1;
    }

    switch (player) {
        case "rock":
            switch (computer) {
                case "paper":
                    //console.log("You Lose! Paper beats Rock");
                    return 0;
                case "scissors":
                    //console.log("You Win! Rock beats Scissors");
                    return 1;
            }
        case "paper":
            switch (computer) {
                case "rock":
                    //console.log("You Win! Paper beats Rock");
                    return 1;
                case "scissors":
                    //console.log("You Lose! Scissors beats Paper");
                    return 0;
            }
        case "scissors":
            switch (computer) {
                case "paper":
                    //console.log("You Win! Scissors beats Paper");
                    return 1;
                case "rock":
                    //console.log("You Lose! Rock beats Scissors");
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
let playerScore = 0;
let compScore = 0;
let ROUNDS = 5;

function game(button) {
    let computer = computerPlay();
    const compChange = document.querySelector("#computer");
    compChange.innerHTML = computer;
    let player = play(button.id, computer);

    const docPlayerScore = document.querySelector("#player-score");
    const docCompScore = document.querySelector("#comp-score")
    if (player == 1) {
        playerScore++;
        docPlayerScore.innerHTML = playerScore;
    } else if (player == 0) {
        compScore++;
        docCompScore.innerHTML = compScore;
    }
}



const selection = document.querySelectorAll('button');
selection.forEach((button) => {
    button.addEventListener('click', () => {
        game(button);
        if (playerScore == ROUNDS) {
            window.location.pathname = "winner/human.html";
        } else if (compScore == ROUNDS){
            window.location.pathname = "winner/comp.html";
        }
    })
});
/*
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
*/
