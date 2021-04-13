function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};

const picture = document.querySelectorAll('.slide-in');


function checkslideing(){
    picture.forEach(slideImage => {
        const slide = (window.scrollY + window.innerHeight)-slideImage.height/2;
        const imageBottom = (slideImage.offsetTop + slideImage.height);
        const halfvisible = slide > slideImage.offsetTop;
        const notscrolled = window.scrollY < imageBottom ;
        if(halfvisible && notscrolled){
            slideImage.classList.add('active');
        }
        else{
            slideImage.classList.remove('active');
        }
    })
}


window.addEventListener('scroll',debounce(checkslideing));