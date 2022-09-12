
let car1 = document.getElementById("car_green");
let car2 = document.getElementById("car_blue");
let car3 = document.getElementById("car_red");
let width = screen.width;
console.log(width);
let raceWidth = width / 2.5;
let raceT1;
let raceT2;
let raceT3;
let winner;
let result;
let message;

function raceTime(min, max) {
       return Math.floor(Math.random() * (max - min) + min);
}


 function startRace() {
    startRaceCar1();
    startRaceCar2();
    startRaceCar3();
    /**raceWinner();**/
    resultMessage();
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

function resetRace(){
    car1.style.transform = "translateX(0px)";
    car2.style.transform = "translateX(0px)";
    car3.style.transform = "translateX(0px)";

} 

function raceWinner() {
    if (raceT1 < raceT2) {
        winner = "Car 1";
        result = "Win";
        message = "Car 1 Wins!";
    }
       else if (raceT2 < raceT1) {
        winner = "Car 2";
        result = "Win";
        message = "Car 2 Wins!";
        }
        else if (raceT3 < raceT1); {
        winner = "Car 3";
        result = "Win";
        message = "Car 3 Wins!"; 
        }
        /** 
        else if (raceT1 == raceT2 || raceT1 == raceT3) {
        result = "Draw";
        message = "Its a Draw"
        }
        else if (raceT2 == raceT1 || raceT2 == raceT3) {
            result = "Draw";
            message = "Its a Draw";
        }
        else if (raceT3 == raceT1 || raceT3 == raceT2) {
            result = "Draw";
            message = "Its a Draw";
        } **/
        console.log(message);
    }

    function resultMessage() {
        document.getElementById("race_result").innerText = message;
    }

