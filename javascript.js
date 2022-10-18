let choices = ["rock", "paper", "scissors"];
player_score = 0;
computer_score = 0;

function computer_selector() {
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function play_round(computer_choice, player_choice) {
    if (choices.indexOf(computer_choice) == choices.indexOf(player_choice)) {
        return "Draw";
    };
    
    if (computer_choice == "scissors" && player_choice == "rock") {
        return "player_wins";
    }
    else if (computer_choice == "rock" && player_choice == "scissors") {
        return "computer_wins";
    }
    
    else if (choices.indexOf(computer_choice) < choices.indexOf(player_choice)) {
        return "player_wins";
    }
    else if (choices.indexOf(player_choice) < choices.indexOf(computer_choice)) {
        return "computer_wins";
    };
}

const buttons = document.querySelectorAll("button");
const score = document.querySelector(".score")
score.style = "white-space: pre-line ; background-color: red";

function checkWinner() {
    if (player_score >= 5 || computer_score >= 5) {
        if (player_score >= 5) {
            score.replaceChildren();
            score.textContent = "Player Wins!";
        }
        else if (computer_score >= 5) {
            score.replaceChildren();
            score.textContent = "Computer Wins!";
        };
    };
}
   
buttons.forEach(button => button.addEventListener('click', function (e) { 
        let player_choice = e.target.className;
        let computer_choice = computer_selector();
        winner = play_round(computer_choice, player_choice);
        if (winner == "player_wins") {
            player_score += 1;
        } 
        else if(winner == "computer_wins") {
            computer_score += 1;
        };
    score.textContent = "Player Score: " + player_score + "     Computer Score: " + computer_score;
    score.textContent += "\nPlayer Choice is: " + player_choice + " and Computer Choice is: " + computer_choice +  '\n';
    score.textContent += winner;

    checkWinner();
}));