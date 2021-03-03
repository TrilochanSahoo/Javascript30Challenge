const input = document.querySelectorAll(".controls input");
// console.log(input);


function eventHandler(){
    const suffix = this.dataset.sizing || '';
    // console.log(suffix)
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}

input.forEach(input => input.addEventListener('change',eventHandler))
input.forEach(input => input.addEventListener('mousemove',eventHandler))
