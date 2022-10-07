let choices = ["rock", "paper", "scissors"];

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
        console.log("Computer Choice: " + computer_choice + "\nPlayer Choice: " + player_choice);
        return "player_wins";
    }
    else if (computer_choice == "rock" && player_choice == "scissors") {
        console.log("Computer Choice: " + computer_choice + "\nPlayer Choice: " + player_choice);
        return "computer_wins";
    }
    
    else if (choices.indexOf(computer_choice) < choices.indexOf(player_choice)) {
        console.log("Computer Choice: " + computer_choice + "\nPlayer Choice: " + player_choice);
        return "player_wins";
    }
    else if (choices.indexOf(player_choice) < choices.indexOf(computer_choice)) {
        console.log("Computer Choice: " + computer_choice + "\nPlayer Choice: " + player_choice);
        return "computer_wins";
    };
}

for (i = 0; i <= 4; i++) {
    let computer_choice = computer_selector();
    let player_choice = prompt("Choose: Rock, Paper, Scissors").toLowerCase();
    console.log(play_round(computer_choice, player_choice));
};

