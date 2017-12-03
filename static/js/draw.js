// reference http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "black";    

var posX = new Array();
var posY = new Array();
var posDrag = new Array();
var hold;

/*  Drawing tool
    Add an event listener to the canvas that will listen for click events by the mouse
    Track the position of where the mouse is being moved to.
*/
function addClick(x, y, dragging)
{
    posX.push(x); //push data to the x position array
    posY.push(y); // push data to the y position array
    posDrag.push(dragging); // push data to the drag positions array
}
// The mousedown event occurs when the left mouse button is pressed down over the selected element.
// ref: https://www.w3schools.com/jsref/event_onmousedown.asp
canvas.addEventListener('mousedown', function(e) {
    canvas.style.cursor = "pointer"; // change the cursor... make it pretty 
    var mouseX = e.pageX - canvas.offsetLeft;
    var mouseY = e.pageY - canvas.offsetTop;
          
    hold = true;
    addClick(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
    redraw();
}); //event listener for mouse down events

// The mouseup event is sent to an element when the mouse pointer is over the element, and the mouse button is released. 
// ref: https://www.w3schools.com/jsref/event_onmouseup.asp 
canvas.addEventListener('mouseup', function (e){
    canvas.style.cursor = "default";   
    hold = false;
}); // event listener for mouse up events

// The onmousemove event occurs when the pointer is moving while it is over an element.
// ref: https://www.w3schools.com/jsref/event_onmousemove.asp
canvas.addEventListener('mousemove', function(e){
    if(hold){
        addClick(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop, true);
        redraw();
    }// if
}); // event listener for mouse move events

// The mouseout event is sent to an element when the mouse pointer leaves the element. Any HTML element can receive this event.
// ref: https://www.w3schools.com/jsref/e_onmouseout.asp
canvas.addEventListener("mouseout", function (e){
    canvas.style.cursor = "default";   
    hold = false;
}); // event listener for mouse out events...

// Draw line   
function redraw(canvas){ // Draw a line on the canvas using the x & y positions
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clears the canvas
    
    ctx.strokeStyle = "#ffffff"; //set colour
    ctx.lineJoin = "round"; // set line end
    ctx.lineWidth = 40;     // set width
              
    for(var i=0; i < posX.length; i++) {

        ctx.beginPath();
        
        if(posDrag[i] && i){
            ctx.moveTo(posX[i-1], posY[i-1]);
        }else{
            ctx.moveTo(posX[i]-1, posY[i]);
        }// if else if

        ctx.lineTo(posX[i], posY[i]);
        ctx.closePath();
        ctx.stroke();             
    }//for
 }// redraw

 // reset the canvas
function reset(){ // clear the rectangle so that the user can draw again
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clears the canvas
    posX = new Array();
    posY = new Array();
    posDrag = new Array();
}//reset

// send the base64 image using an ajax post request and return our promise
function sendFile(){
    //first save the file as a png - will be saved as a base 64 image
    var img = canvas.toDataURL('image/png');

    //create an ajax call to the python script
    $.ajax({    // sent base 64 image to python as a json file.
        url: '/uploadFile',
        method: 'POST',
        data: img ,
        success: function(res){     // return the result            
            $('#result').text('Prediction: ' + res);
        },error: function(err){     // return the error
            $('#result').text('Oops.... something went wrong :( ' + err);
        } // Success & error handling
    });//end ajax   
}//send file
