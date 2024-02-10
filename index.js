const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const car1 = document.getElementById("car_info1");
const car2 = document.getElementById("car_info2");
const car3 = document.getElementById("car_info3");

button1.onclick = buttonn1;

function buttonn1(){
    car1.style.display = "block"
    car2.style.display = "none"
    car3.style.display = "none"
}
button2.onclick = buttonn2;

function buttonn2(){
    car2.style.display = "block"
    car1.style.display = "none"
    car3.style.display = "none"
}
button3.onclick = buttonn3;

function buttonn3(){
    car2.style.display = "none"
    car1.style.display = "none"
    car3.style.display = "block"
}