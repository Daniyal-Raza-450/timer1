function hello(){
    alert('hello world')
}
// hello()
// setTimeout(hello,)
var hour= 0
var min= 0
var sec= 0
var milisec= 0
var displayHour = document.getElementById('houre')
var displayMin = document.getElementById('min')
var displaySec = document.getElementById('sec')
var displayMilisec = document.getElementById('milisec')

function timer(){
    milisec++
    displayMilisec.innerHTML =milisec
    if(milisec == 100){
        sec++
        displaySec.innerHTML =sec
        milisec =0
    }
    else if(sec == 60){
        min++
        displayMin.innerHTML=min
        sec= 0
    }else if(min == 60){
        hour++
        displayHour.innerHTML=hour
        min=0
    }
}
function start(){

    timerplay = setInterval(timer , 10);

}
function stop(){
    clearInterval(timerplay)
}
function reset(){
    milisec= 0
     sec=0
     min=0
     hour=0
     displayMilisec.innerHTML=milisec
     displaySec.innerHTML=sec
     displayMin.innerHTML=min
     displayHour.innerHTML=hour
}