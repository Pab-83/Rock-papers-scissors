let choices = ["rock", "paper", "scissors"];
player_score = 0;
computer_score = 0;

function computer_selector() {
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function play_round(computer_choice, player_choice) {
    if (choices.indexOf(computer_choice) == choices.indexOf(player_choice)) {
        console.log("Computer Choice: " + computer_choice + "\nPlayer Choice: " + player_choice);
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

for (i = 0; i <= 4; i++) {
    let computer_choice = computer_selector();
    let player_choice = prompt("Choose: Rock, Paper, Scissors").toLowerCase();
    winner = play_round(computer_choice, player_choice);

    if (winner == "player_wins") {
        player_score += 1;
        console.log("Player choose: " + player_choice + "\nThe Computer choose: " + computer_choice);
        console.log("Player wins");
    }
    else if (winner == "computer_wins") {
        computer_score += 1;
        console.log("Player choose: " + player_choice + "\nThe Computer choose: " + computer_choice);
        console.log("Computer wins");
    }
    else {
        console.log("Draw");
    }

    console.log("Player Score: " + player_score + " Computer Score: " + computer_score);
};

if (player_score > computer_score) {
    console.log("Player wins the match!");
}
else if (computer_score > player_score) {
    console.log("Computer wins the match!");
}
else {
    console.log("It's a Draw!");
}

