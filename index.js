const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEL = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let currentTime=  new Date();
    let h = currentTime.getHours()
    let m = currentTime.getMinutes()
    let s = currentTime.getSeconds()
    let ampm = "AM"
    if(h>12){
        h=h-12
        ampm="PM"
    } 
    h=h<10 ? "0" + h : h;
    m=m<10 ? "0" + m : m;
    s=s<10 ? "0" + s : s;

     hourEl.innerHTML=h
     minuteEl.innerHTML=m
     secondEL.innerHTML=s
     ampmEl.innerHTML=ampm
     setTimeout(()=>{
        updateClock()
     },1000)



}
updateClock()
