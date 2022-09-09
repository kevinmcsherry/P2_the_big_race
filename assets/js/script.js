

    let car1 = document.getElementById("car_green");
    let car2 = document.getElementById("car_blue");
    let car3 = document.getElementById("car_red");
    let button = document.getElementsByTagName("button");

    button.addEventListener('click', function() {
        car1.style.width=400+"px";
        car2.style.width=400+"px";
        car3.style.width=400+"px";
    });
