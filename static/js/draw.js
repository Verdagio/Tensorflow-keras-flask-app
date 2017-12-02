// reference http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "black";    

/*  Drawing tool
    Add an e listener to the canvas that will listen for click es by the mouse
    Track the position of where the mouse is being moved to.
*/
var posX = new Array();
var posY = new Array();
var posDrag = new Array();
var hold;

function addClick(x, y, dragging)
{
    posX.push(x);
    posY.push(y);
    posDrag.push(dragging);
}
canvas.addEventListener('mousedown', function(e) {
    canvas.style.cursor = "pointer";    
    var mouseX = e.pageX - canvas.offsetLeft;
    var mouseY = e.pageY - canvas.offsetTop;
          
    hold = true;
    addClick(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
    redraw();

});
// The mouseup e is sent to an element when the mouse pointer is over the element, and the mouse button is released. 
// ref: https://www.w3schools.com/jsref/e_onmouseup.asp 
canvas.addEventListener('mouseup', function (e){
    canvas.style.cursor = "default";   
    hold = false;
});

// The onmousemove event occurs when the pointer is moving while it is over an element.
// ref: https://www.w3schools.com/jsref/event_onmousemove.asp
canvas.addEventListener('mousemove', function(e){
    if(hold){
        addClick(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop, true);
        redraw();
    }
});


// The mouseout e is sent to an element when the mouse pointer leaves the element. Any HTML element can receive this e.
// ref: https://www.w3schools.com/jsref/e_onmouseout.asp
canvas.addEventListener("mouseout", function (e){
    canvas.style.cursor = "default";   
    hold = false;
});

// Draw line   
function redraw(canvas){ // Draw a line on the canvas using the x & y positions
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clears the canvas
    
    ctx.strokeStyle = "#ffffff";
    ctx.lineJoin = "round";
    ctx.lineWidth = 20;
              
    for(var i=0; i < posX.length; i++) {		
        ctx.beginPath();
        if(posDrag[i] && i){
            ctx.moveTo(posX[i-1], posY[i-1]);
        }else{
            ctx.moveTo(posX[i]-1, posY[i]);
        }
        ctx.lineTo(posX[i], posY[i]);
        ctx.closePath();
        ctx.stroke();       
        
    }
    
 }
function reset(){ // clear the rectangle so that the user can draw again
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clears the canvas
}
// currently not working will fix later...

function sendFile(){

    //first save the file as a png - will be saved as a base 64 image
    var img = canvas.toDataURL('image/png');


    //$SCRIPT_ROOT = request.script_root|tojson|safe;

    //create an ajax call to the python script
    $.ajax({    // sent base 64 image to python as a json file.
        url: '/uploadFile',
        method: 'POST',
        data: img ,
        success: function(res){     // return the result            
            console.log(res);
            
            
        },error: function(err){     // return the error
            console.log(err);
        }
    });    
}
