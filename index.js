// Import stylesheets
import './style.css';

//Create a canvas object
var canvas = document.getElementById('canvas');
//Create a 2d drawing object for the canvas object
var ctx = canvas.getContext('2d');

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
var radius = 60;

drawClock();

//draw the clock
function drawClock() {
  drawFace(ctx, radius);
}

function drawFace() {
  var grad;

  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();

  //Create a radial gradient
  grad = ctx.createRadialGradient(0, 0, radius*.5, 0, 0, radius*5.05);
  //3 color stops, corresponding with the inner, middle, and outer edge of the arc
  grad.addColorStop(0, 'white');
  grad.addColorStop(0, 'black');
  grad.addColorStop(0, '#38074D');
  //Define the gradient as the stroke style of the drawing object
  ctx.strokeStyle = grad;
  //Define the line width of the drawing object
  ctx.lineWidth = radius*0.05;
  //Draw the circle
  ctx.stroke();

  //Draw the clock center:
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius*0.05, 0, 2*Math.PI);
  ctx.fillStyle = '#38074D';
  ctx.fill();
}
