function computerPlay() {
    let selections = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return selections[index];
}

function playerPlay() {
    return prompt("Please enter your choice.").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        return -1;
    }

    if(playerSelection == computerSelection) {
        return 0;
    } 
    else if((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")) {
        return 1;
    }
    else {
        return 2;
    }
}

function game() {
    let count = 0;
    for(let i=0; i<5; i++)
    {
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        console.log(playerSelection + " => " + computerSelection);
        if(playRound(playerSelection, computerSelection) == -1) {
            console.log("*faceplams* I gave you one job! You lose by default!");
        }
        if(playRound(playerSelection, computerSelection) == 0) {
            console.log("It's a tie!");
        }
        if(playRound(playerSelection, computerSelection) == 1) {
            console.log("You win!");
            count++;
        }
        if(playRound(playerSelection, computerSelection) == 2) {
            console.log("You lose!");
        }
    }
    if(count < 3) {
        console.log("You lost the series!");
    } else if (count >= 3) {
        console.log("You won the series!");
    }
}

game();