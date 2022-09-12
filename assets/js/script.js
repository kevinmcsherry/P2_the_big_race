
let car1 = document.getElementById("car_green");
let car2 = document.getElementById("car_blue");
let car3 = document.getElementById("car_red");



 function startRace() {
    startRaceCar1();
    startRaceCar2();
    startRaceCar3();
 }
    

    function startRaceCar1() {
        car1.style.position = "relative";
        car1.style.transform = "translateX(550px)";
        car1.style.transition=" all 4s"
    }

    function startRaceCar2() {
        car2.style.position = "relative";
        car2.style.transform = "translateX(550px)";
        car2.style.transition=" all 6s"
    }

    function startRaceCar3() {
        car3.style.position = "relative";
        car3.style.transform = "translateX(550px)";
        car3.style.transition=" all 7s"
    }


