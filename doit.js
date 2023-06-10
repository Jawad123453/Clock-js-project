setInterval(moving, 1000);

let hourhand=document.querySelector(".hours")
let minteshand=document.querySelector(".mintutes")
let secondshand=document.querySelector(".seconds")

function moving(){
  const currentday=new Date();
  const secondstime=currentday.getSeconds()/60;
  const mintestime=(secondstime+currentday.getMinutes())/60;
  const hourstime=(mintestime+currentday.getHours())/12;

  setrotaion(secondshand,secondstime);
  setrotaion(minteshand,mintestime);
  setrotaion(hourhand,hourstime);
}
function setrotaion(element,rotationracyo){
  element.style.setProperty("--rotation",rotationracyo * 360);
}