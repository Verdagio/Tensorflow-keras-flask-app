// reference http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
/*  Drawing tool
    Add an e listener to the canvas that will listen for click es by the mouse
    Track the position of where the mouse is being moved to.
*/
var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}
canvas.addEventListener('mousedown', function(e) {
    canvas.style.cursor = "pointer";    
    var mouseX = e.pageX - canvas.offsetLeft;
    var mouseY = e.pageY - canvas.offsetTop;
          
    paint = true;
    addClick(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
    redraw();

});
// The mouseup e is sent to an element when the mouse pointer is over the element, and the mouse button is released. 
// ref: https://www.w3schools.com/jsref/e_onmouseup.asp 
canvas.addEventListener('mouseup', function (e){
    canvas.style.cursor = "default";   
    paint = false;
});
canvas.addEventListener('mousemove', function(e){
    if(paint){
        addClick(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop, true);
        redraw();
      }
});


// The mouseout e is sent to an element when the mouse pointer leaves the element. Any HTML element can receive this e.
// ref: https://www.w3schools.com/jsref/e_onmouseout.asp
canvas.addEventListener("mouseout", function (e){
    canvas.style.cursor = "default";   
    paint = false;
});

// Draw line   
function redraw(canvas){ // Draw a line on the canvas using the x & y positions
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clears the canvas
    
    ctx.strokeStyle = "#ffffff";
    ctx.lineJoin = "round";
    ctx.lineWidth = 25;
            
    ctx.lineTo(clickX[i], clickY[i]);
    ctx.stroke();
    ctx.closePath();
       
    
 }
function reset(){ // clear the rectangle so that the user can draw again

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
}

function saveandupload(){
    //first create an image object and save the canvas to it as a png
    var img = new Image();
    img = canvas.toDataURL('image/png');
    console.log(img.width, img.height);
    img.width = 28;
    img.height = 28;
    console.log(img.width, img.height);
    





    //scale the image to a 28 * 28 resolution png


    //send the png using a request to the upload file function in python

    // return the result

}