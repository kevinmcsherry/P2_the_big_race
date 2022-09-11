
let car1 = document.getElementById("car_green");
let car2 = document.getElementById("car_blue");
let car3 = document.getElementById("car_red");
/**car1.addEventListener("click", move1);
car2.addEventListener("click", move2);
car3.addEventListener("click", move3);**/



/**function move1(e) {
   carX += 550;
   car1.style.position = "relative";
   car1.style.transform = "translateX(" + carX + "px)";
}
function move2(e) {
    carX += 550;
    car2.style.position = "relative";
    car2.style.transform = "translateX(" + carX + "px)";
 }
 function move3(e) {
    carX += 550;
    car3.style.position = "relative";
    car3.style.transform = "translateX(" + carX + "px)";
 } **/
    

    function startRaceCar1() {
        car1.style.position = "relative";
        car1.style.transform = "translateX(550px)";
        car1.style.transition=" all 2s"
    }

    function startRaceCar2() {
        car2.style.position = "relative";
        car2.style.transform = "translateX(550px)";
        car2.style.transition=" all 2s"
    }

    function startRaceCar3() {
        car3.style.position = "relative";
        car3.style.transform = "translateX(550px)";
        car3.style.transition=" all 2s"
    }


