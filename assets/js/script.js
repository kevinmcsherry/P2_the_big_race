
let car1 = document.getElementById("car_green");
let car2 = document.getElementById("car_blue");
let car3 = document.getElementById("car_red");
let width = screen.width;
let raceWidth;
console.log(width);
let raceT1;
let raceT2;
let raceT3;
let winner;
let result;
let message;
let userWin;
let choice_green;
let choice_red;
let choice_blue;

function raceTime(min, max) {
       return Math.floor(Math.random() * (max - min) + min);
}

function screenWidth() {
    let width = window.innerWidth;

    if (width > 1200) {
         raceWidth = width / 2.2;
         console.log(width);
         console.log(raceWidth);
    }
    else if (width > 1000) {
        raceWidth = width / 1.9;
        console.log(width);
         console.log(raceWidth);

    }
    else if (width > 700) {
        raceWidth = width / 1.7;
        console.log(width);
         console.log(raceWidth);
    }
    else if (width > 500) {
        raceWidth = width / 1.9;
        console.log(width);
         console.log(raceWidth);
    }
    else if (width > 400) {
        raceWidth = width / 1.7;
        console.log(width);
         console.log(raceWidth);
    }
    else {
        raceWidth = width / 2;
        console.log(width);
         console.log(raceWidth);
    }
    
}


 function startRace() {
    screenWidth();
    startRaceCar1();
    startRaceCar2();
    startRaceCar3();
    userChoice();
    /**raceWinner();**/
    setTimeout(resultMessage, 5000);
    /**resultMessage();**/
    
 }
    

function startRaceCar1() {
    raceT1 = raceTime (3,8);
    car1.style.position = "relative";
    car1.style.transform = "translateX(" + raceWidth + "px)";
    car1.style.transition=" all "+ raceT1 +"s";
    console.log(raceT1);
}

function startRaceCar2() {
    raceT2 = raceTime (3,8);
    car2.style.position = "relative";
    car2.style.transform = "translateX(" + raceWidth + "px)";
    car2.style.transition=" all "+ raceT2 +"s";
    console.log(raceT2);
}

function startRaceCar3() {
    raceT3 = raceTime (3,8);
    car3.style.position = "relative";
    car3.style.transform = "translateX(" + raceWidth + "px)";
    car3.style.transition=" all "+ raceT3 +"s";
    console.log(raceT3);
    raceWinner();
    }



function raceWinner() {
    if ((raceT1 < raceT2 && raceT1 < raceT3)) {
        winner = "Green";
        result = "Win";
        message = "Green Wins!";
        document.getElementById("race_result").style.color = "chartreuse";
    }
       else if ((raceT2 < raceT1 && raceT2 < raceT3)) {
        winner = "Blue";
        result = "Win";
        message = "Blue Wins!";
        document.getElementById("race_result").style.color = "blue";
        }
        else if ((raceT3 < raceT1 && raceT3 < raceT2)) {
        winner = "Red";
        result = "Win";
        message = "Red Wins!"; 
        document.getElementById("race_result").style.color = "red";
        }
        
        else if ((raceT1 == raceT2 || raceT1 == raceT3)) {
        result = "Draw";
        message = "Draw"
        document.getElementById("race_result").style.color = "black";
        }
        else if ((raceT2 == raceT1 || raceT2 == raceT3)) {
            result = "Draw";
            message = "Draw";
            document.getElementById("race_result").style.color = "black";
        }
        else if ((raceT3 == raceT1 || raceT3 == raceT2)) {
            result = "Draw";
            message = "Draw";
            document.getElementById("race_result").style.color = "black";
        } 
        console.log(message);
    }

    function userChoice() {
        let choice_green = false;
        let choice_blue = false;
        let choice_red = false;
        
            document.addEventListener('click', function(e) {
            ( e.target.id );

                if (e.target.id == "car_green"){ 
                    choice_green = true;
                } else if (e.target.id == "car_blue") {
                    choice_blue = true;
                } else {
                    choice_red = true;
                }
                console.log(choice_green);
                console.log(choice_blue);
                console.log(choice_red);
                console.log(e.target.id);
            });

                /**function setScores() {
                    if (choice_green = true && message == "car_green") {
                        console.log("Green +1");
                    }else if (choice_blue = true && message == "car_blue") {
                        console.log ("Blue +1");
                    }else if (choice_red = true && message == "car_red") {
                        console.log("Red +1");
                        }
                    }
            setScores();
                });**/
        }


    function resultMessage(){
        document.getElementById("race_result").innerText = message +"!";
    }


    function resetRace(){
        car1.style.transform = "translateX(0px)";
        car2.style.transform = "translateX(0px)";
        car3.style.transform = "translateX(0px)";
        document.getElementById("race_result").innerText = null;
    } 

    function resetGame(){
        window.location.reload();
    }


    

    
