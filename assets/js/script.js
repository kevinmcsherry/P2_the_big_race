function startGame () {
    let car1 = document.getElementById("green_car");
    let car2 = document.getElementById("blue_car");
    let car3 = document.getElementById("red_car");
    let button = document.getElementById("button");

    button.addEventListener('click', function() {
        car1.style.width=400+"px";
        car2.style.width=400+"px";
        car3.style.width=400+"px";
    });

    startGame();

}