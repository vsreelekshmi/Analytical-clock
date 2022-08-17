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
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.fillStyle = '#38074D';
  ctx.fill();
}
