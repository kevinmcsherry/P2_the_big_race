// Setting global variables // 

let car1 = document.getElementById("car_green");
let car2 = document.getElementById("car_blue");
let car3 = document.getElementById("car_red");
let raceWidth;
let raceT1;
let raceT2;
let raceT3;
let winner;
let result;
let message;

// function to set the racetime for each car //

function raceTime(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Calculate the screen width to determine the length of race course //

function screenWidth() {
    let width = window.innerWidth;

    if (width > 1800) {
        raceWidth = width / 3.25;
    }else if (width > 1500) {
        raceWidth = width / 2.6;
    }else if (width > 1200) {
        raceWidth = width / 2.2;
    } else if (width > 1000) {
        raceWidth = width / 1.6;
    } else if (width > 700) {
        raceWidth = width / 1.7;
    } else if (width > 500) {
        raceWidth = width / 1.8;
    } else if (width > 400) {
        raceWidth = width / 2;
    } else {
        raceWidth = width / 2;
    }

}

// Main function to run race //

function startRace() {
    screenWidth();
    startRaceCar1();
    startRaceCar2();
    startRaceCar3();
    userChoice();
    setTimeout(resultMessage, 4000);
    setTimeout(resetRace, 5000);
    setTimeout(gameWin, 7000);
}

// Sub function for Race Car1 //

function startRaceCar1() {
    raceT1 = raceTime(2, 7);
    car1.style.position = "relative";
    car1.style.transform = "translateX(" + raceWidth + "px)";
    car1.style.transition = " all " + raceT1 + "s";
}

// Sub function for Race Car2 //

function startRaceCar2() {
    raceT2 = raceTime(2, 7);
    car2.style.position = "relative";
    car2.style.transform = "translateX(" + raceWidth + "px)";
    car2.style.transition = " all " + raceT2 + "s";
}

// Sub function for Race Car3 //

function startRaceCar3() {
    raceT3 = raceTime(2, 7);
    car3.style.position = "relative";
    car3.style.transform = "translateX(" + raceWidth + "px)";
    car3.style.transition = " all " + raceT3 + "s";
    raceWinner();
}

// Function to determine race winner //

function raceWinner() {
    if ((raceT1 < raceT2 && raceT1 < raceT3)) {
        winner = "Green";
        result = "Win";
        message = "Green Wins!";
        document.getElementById("race_result").style.color = "chartreuse";
    } else if ((raceT2 < raceT1 && raceT2 < raceT3)) {
        winner = "Blue";
        result = "Win";
        message = "Blue Wins!";
        document.getElementById("race_result").style.color = "blue";
    } else if ((raceT3 < raceT1 && raceT3 < raceT2)) {
        winner = "Red";
        result = "Win";
        message = "Red Wins!";
        document.getElementById("race_result").style.color = "red";
    } else if ((raceT1 == raceT2 || raceT1 == raceT3)) {
        result = "Draw";
        message = "Draw";
        document.getElementById("race_result").style.color = "black";
    } else if ((raceT2 == raceT1 || raceT2 == raceT3)) {
        result = "Draw";
        message = "Draw";
        document.getElementById("race_result").style.color = "black";
    } else if ((raceT3 == raceT1 || raceT3 == raceT2)) {
        result = "Draw";
        message = "Draw";
        document.getElementById("race_result").style.color = "black";
    }
}

// Function to determine who the user chose to win //

function userChoice() {
    let choice_green = false;
    let choice_blue = false;
    let choice_red = false;

    document.addEventListener('click', function (e) {
        (e.target.id);

        if (e.target.id == "car_green") {
            choice_green = true;
        } else if (e.target.id == "car_blue") {
            choice_blue = true;
        } else {
            choice_red = true;
        }

        // Sub function to determine correct winning message //

        function winMsg() {
            if (choice_green == true && message == "Green Wins!") {
                message = "Yeah! " + message;
                setTimeout(setGreenScore, 4000);
                setTimeout(setPlayerScore, 4000);
            } else if (choice_green == true && message == "Red Wins!") {
                message = "Bad Luck! " + message;
                setTimeout(setRedScore, 5000);
            } else if (choice_green == true && message == "Blue Wins!") {
                message = message = "Bad Luck! " + message;
                setTimeout(setBlueScore, 5000);
            } else if (choice_blue == true && message == "Blue Wins!") {
                message = "Yeah! " + message;
                setTimeout(setBlueScore, 5000);
                setTimeout(setPlayerScore, 4000);
            } else if (choice_blue == true && message == "Green Wins!") {
                message = "Bad Luck! " + message;
                setTimeout(setGreenScore, 5000);
            } else if (choice_blue == true && message == "Red Wins!") {
                message = "Bad Luck! " + message;
                setTimeout(setRedScore, 5000);
            } else if (choice_red == true && message == "Red Wins!") {
                message = "Yeah! " + message;
                setTimeout(setRedScore, 5000);
                setTimeout(setPlayerScore, 4000);
            } else if (choice_red == true && message == "Green Wins!") {
                message = "Bad Luck! " + message;
                setTimeout(setGreenScore, 5000);
            } else if (choice_red == true && message == "Blue Wins!") {
                message = "Bad Luck! " + message;
                setTimeout(setBlueScore, 5000);
            }

            choice_green = false;
            choice_blue = false;
            choice_red = false;
        }
        winMsg();
    });
}

// Setting the scores post-race //  

function setGreenScore() {
    let oldScore = parseInt(document.getElementById("green_score").innerText);
    document.getElementById("green_score").innerText = ++oldScore;
}

function setBlueScore() {
    let oldScore = parseInt(document.getElementById("blue_score").innerText);
    document.getElementById("blue_score").innerText = ++oldScore;
}

function setRedScore() {
    let oldScore = parseInt(document.getElementById("red_score").innerText);
    document.getElementById("red_score").innerText = ++oldScore;
}

function setPlayerScore() {
    let oldScore = parseInt(document.getElementById("player_score").innerText);
    document.getElementById("player_score").innerText = ++oldScore;
}

// Post result message //

function resultMessage() {
    document.getElementById("race_result").innerText = message + "!";
}

// Post championship message //

function champMessage() {
    document.getElementById("champ_result").innerText = "Championship Winner = " + message;
    setTimeout(resetGame, 7000);
}

// Function to reset race //

function resetRace() {
    car1.style.transform = "translateX(0px)";
    car2.style.transform = "translateX(0px)";
    car3.style.transform = "translateX(0px)";
    document.getElementById("race_result").innerText = null;
}

// Function to reset the game //

function resetGame() {
    window.location.reload();
}

// Function to determine who wins overall game //

function gameWin() {
    let playerScore = document.getElementById("player_score").innerText;
    let redScore = document.getElementById("red_score").innerText;
    let blueScore = document.getElementById("blue_score").innerText;
    let greenScore = document.getElementById("green_score").innerText;

    if (playerScore == "5") {
        message = "You Win!";
        champMessage();
    } else if (redScore == "5") {
        message = "Red Car";
        champMessage();
    } else if (blueScore == "5") {
        message = "Blue Car";
        champMessage();
    } else if (greenScore == "5") {
        message = "Green Car";
        champMessage();
    }
}