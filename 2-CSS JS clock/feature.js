const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setDate(){
    const newDate = new Date();
    
    const newSecond = newDate.getSeconds();
    const secondDegree = ((newSecond/60)*360)+90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    const newMinute = newDate.getMinutes();
    const minuteDegree = ((newMinute/60)*360)+((newSecond/60)*6) + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    const newHour = newDate.getHours();
    const hourDegree = ((newHour/12)*360)+((newMinute/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;


}
setInterval(setDate,1000);
