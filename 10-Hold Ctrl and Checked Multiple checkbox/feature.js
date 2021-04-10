const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(checkBoxes)
let lastCheckedBox;

function checkList(e){
    // take a variable for checked the middle element 
    let middle = false

    if(e.ctrlKey && this.checked){
        checkBoxes.forEach(checkbox => {
            console.log(checkbox)
            if(checkbox === this || checkbox === lastCheckedBox){
                console.log("this is starting")
                middle = !middle
                console.log(middle)
            }
            if(middle){
                checkbox.checked = true
            }

        })
    }
    // to store the last checkbox point 
    lastCheckedBox = this
    
}
checkBoxes.forEach(checkbox => checkbox.addEventListener('click',checkList));