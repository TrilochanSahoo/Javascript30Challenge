const video = document.querySelector('.video_display');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress_bar');
const toggleBtn = document.querySelector('.video_toggle_btn');
const slideBar = document.querySelectorAll('.slide_bar');
const skipBtns = document.querySelectorAll('[data-skip]');
const fullScreenBtn = document.querySelector('.full_screen');


function togglePlay(){
    if(video.paused){
        video.play()
    }
    else{
        video.pause()
    }
}


function updateBtn(){
    let icon;
    if(this.paused){
        icon = '►'
    }
    else{
        icon = '❚ ❚'
    }
    toggleBtn.textContent = icon;
}

function skipTime(){
    console.log(this.dataset.skip)
    video.currentTime += parseFloat(this.dataset.skip) 
}

function rangeUpdate(){
    video[this.name] = this.value;
}

function playbarUpdate(){
    const percentage = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis=`${percentage}%`;
}

function videoPlaybarUpdate(e){
    const time = (e.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime = time
}

video.addEventListener('click',togglePlay);
video.addEventListener('play',updateBtn);
video.addEventListener('pause',updateBtn);
video.addEventListener('timeupdate',playbarUpdate)


toggleBtn.addEventListener('click',togglePlay);
skipBtns.forEach(button => {
    button.addEventListener('click',skipTime);
});

slideBar.forEach(range => range.addEventListener('change',rangeUpdate));

let mousedown = false
progress.addEventListener('click',videoPlaybarUpdate);
progress.addEventListener('mousemove',(e) => mousedown && videoPlaybarUpdate(e));
progress.addEventListener('mousedown',() => mousedown =true);
progress.addEventListener('mouseup',() => mousedown =false);

// play or pause using spacebar key 
document.body.onkeyup = function(e){
    if(e.keyCode==32){
        togglePlay()
    }
}

// for fullscreen 
function fullScreen(){
    if(video.requestFullscreen){
        video.requestFullscreen();
    }
    // else if(video.mozRequestFullScreen){
    //     video.mozRequestFullScreen();
    // }
    // else if(video.webkitRequestFullScreen){
    //     video.webkitRequestFullScreen();
    // }
}

fullScreenBtn.addEventListener('click',fullScreen)