var canvas = document.getElementById('myCanvas');
canvas.width = 500;
canvas.height = 500;
canvas.style.background = 'black';
var ctx = canvas.getContext("2d");


var mouse = {
        posX: null,
        posY: null,
        hold: false,
    }
strokes = [];
currStroke= null;

/*  Drawing tool
    Add an e listener to the canvas that will listen for click es by the mouse
    Track the position of where the mouse is being moved to.
*/
canvas.addeListener('mousedown', function(e) {
    canvas.style.cursor ="pointer";
    mouse.hold = true;    

    currStroke = {
        colour: mouse.colour,
        size: mouse.size,
        points: []
    }
    strokes.push(currStroke);
    
    movee(e);

});
// The mouseup e is sent to an element when the mouse pointer is over the element, and the mouse button is released. 
// ref: https://www.w3schools.com/jsref/e_onmouseup.asp 
canvas.addeListener('mouseup', function (e){
    mouse.hold = false;
    canvas.style.cursor="default";

    movee(e);

    currStroke = null;
});
canvas.addeListener('mousemove', function(e){
    if(mouse.hold){
        movee(e);
    }
});


// The mouseout e is sent to an element when the mouse pointer leaves the element. Any HTML element can receive this e.
// ref: https://www.w3schools.com/jsref/e_onmouseout.asp
canvas.addeListener("mouseout", function (e){
    mouse.hold = false;
    canvas.style.cursor="default";
});

function movee (e){
    mouse.posX = e.clientX - canvas.offsetLeft;
    mouse.posY = e.clientY - canvas.offsetTop;

    currStroke.points.push({
        x: mouse.posX,
        y: mouse.posY,
    });
    draw();    
}
// Draw line   
function draw (canvas){ // Draw a line on the canvas using the x & y positions
    ctx.lineCap = "round";
    for(var i = 0; i < strokes.length; i++){
        var tmp = strokes[i];
        ctx.stokeStyle = "#ffff";
        ctx.lineWidth = 10;
        ctx.
        ctx.beginPath();
        ctx.moveTo(tmp.points[0].x, tmp.points[0].y);
        for(var j = 0; j < points.length; j++){
            ctx.lineTo(tmp.points[j].x, tmp.points[j].y);
        }
        ctx.stroke();
    }
    ctx.closePath();

 }
function reset(){ // clear the rectangle so that the user can draw again
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
