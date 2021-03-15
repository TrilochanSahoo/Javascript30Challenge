const panels = document.querySelectorAll('.pannel');
// console.log(panels)

function openScreen(){
    // console.log('hi')
    this.classList.toggle('open');
}

function showLetter(e){
    // console.log(e)
    if (e.propertyName==='flex-grow'){
        this.classList.toggle('open-active');
    }

}

panels.forEach(panel => panel.addEventListener('click',openScreen));
panels.forEach(panel => panel.addEventListener('transitionend',showLetter));