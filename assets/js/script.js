
let car1 = document.getElementById("car_green");
let car2 = document.getElementById("car_blue");
let car3 = document.getElementById("car_red");
let width = screen.width;
console.log(width);
let raceWidth = width / 2.5;

function raceTime(min, max) {
       return Math.floor(Math.random() * (max - min) + min);
}


 function startRace() {
    startRaceCar1();
    startRaceCar2();
    startRaceCar3();
 }
    

function startRaceCar1() {
    let raceT = raceTime (3,8);
    car1.style.position = "relative";
    car1.style.transform = "translateX(" + raceWidth + "px)";
    car1.style.transition=" all "+ raceT +"s";
}

function startRaceCar2() {
    let raceT = raceTime (3,8);
    car2.style.position = "relative";
    car2.style.transform = "translateX(" + raceWidth + "px)";
    car2.style.transition=" all "+ raceT +"s";
}

function startRaceCar3() {
    let raceT = raceTime (3,8);
    car3.style.position = "relative";
    car3.style.transform = "translateX(" + raceWidth + "px)";
    car3.style.transition=" all "+ raceT +"s";
    }

function resetRace(){
    car1.style.transform = "translateX(0px)";
    car2.style.transform = "translateX(0px)";
    car3.style.transform = "translateX(0px)";

} 
