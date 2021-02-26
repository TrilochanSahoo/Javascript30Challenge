function makeSound(event){
    let str = []
    str = event
    let a = 0
    
    switch(str[0]){
        case "A" :
            a = 65;
            break;
        case "S" :
            a = 83;
            break;
        case "D" :
            a = 68;
            break;
        case "F" :
            a = 70;
            break;
        case "G" :
            a = 71;
            break;
        case "H" :
            a = 72;
            break;
        case "J" :
            a = 74;
            break;
        case "K" :
            a = 75;
            break;
        case "L" :
            a = 76;
            break;                
    }
    const audio = document.querySelector(`audio[data-key="${a}"]`);
    const key = document.querySelector(`.key[data-key="${a}"]`);
    if(!audio){
        return;
    }
    audio.currentTime=0;
    audio.play();
    key.classList.add("playing");
}


function playSound(event){
    console.log(typeof event.keyCode)
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    console.log(audio)
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio){
        return;
    }
    audio.currentTime=0;
    audio.play();
    key.classList.add("playing");
}

function removeTransition(event){
    if(event.propertyName!= "transform"){
        return;
    }
    this.classList.remove("playing");
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition))


var drumBtn = document.querySelectorAll(".drum");
for(var i=0;i<drumBtn.length;i++){
    drumBtn[i].addEventListener('click',function(){
        var buttonInnerText = this.innerText;
        makeSound(buttonInnerText);
    });
}

window.addEventListener('keydown',playSound);