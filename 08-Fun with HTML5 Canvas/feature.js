const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.strokeStyle = '#BADASS'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 100

let isDrawing = false;
let x = 0;
let y = 0;
let hue = 0
let direction = true

function drawCanvas(e){
    if(!isDrawing){
        return
    }
    console.log(e);

    // for rainbow color 
    ctx.strokeStyle = `hsl(${hue},100%,50%)`
    // for line Width 
    // ctx.lineWidth = hue
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke();
    [x,y]=[e.offsetX,e.offsetY]
    hue++;
    if(hue>340)
    {
        hue = 0
    }

    // for line Width 
    if(ctx.lineWidth>=100 || ctx.lineWidth<=1){
        direction = !direction;
    }
    if(direction){
        ctx.lineWidth++
    }else{
        ctx.lineWidth--
    }
}

canvas.addEventListener('mousedown',(e)=>{
    isDrawing=true;
    [x,y]=[e.offsetX,e.offsetY]
});
canvas.addEventListener('mousemove',drawCanvas);
canvas.addEventListener('mouseup',()=>{isDrawing=false});
canvas.addEventListener('mouseout',()=>{isDrawing=false});