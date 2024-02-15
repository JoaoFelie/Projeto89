let canvas = document.getElementById("mycanvas")
let ctx = canvas.getContext("2d");
let color = "blue";

let MouseX;
let MouseY;
let MouseXfinal;
let MouseYfinal;
let evento="";

canvas.addEventListener("mousedown", cliquei);

function cliquei(e){
    color=document.getElementById("cor").value;
    largura=document.getElementById("largura").value;
    evento="mousedown";
}

canvas.addEventListener("mousemove", movimentei);

function movimentei(e){
    MouseXfinal = MouseX;
    MouseYfinal = MouseY;
    MouseX = e.clientX - canvas.offsetLeft;
    MouseY = e.clientY - canvas.offsetTop;
    if(evento=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = largura;
        ctx.moveTo(MouseXfinal, MouseYfinal);
        ctx.lineTo(MouseX, MouseY);
        ctx.stroke();    
    }
}
canvas.addEventListener("mouseup", naocliquei);
function naocliquei(){
    evento="mouseup";
}

function limpar(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
}