// Import stylesheets
import './style.css';

setupAnalogClock(document.getElementById('canvas'), 100);

function setupAnalogClock(canvas, clockWidth) {
  //		var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;

  function tick() {
    var date = new Date();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStatic();

    var hours = date.getHours();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    drawHand(clockWidth / 3, hours * 30);

    var minutes = date.getMinutes();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    drawHand(clockWidth / 2, minutes * 6);

    var seconds = date.getSeconds();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 1;
    drawHand(clockWidth / 2, seconds * 6);

    function drawStatic() {
      ctx.beginPath();
      ctx.arc(centerX, centerY, clockWidth / 2, 0, 2 * Math.PI, false);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 2, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'black';
      ctx.fill();
      ctx.closePath();

      drawNumbers();

      function drawNumbers() {
        var i = 12;
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        while (i > 0) {
          ctx.save();
          ctx.beginPath();
          ctx.translate(centerX, centerY);
          var angle = (i * 30 * Math.PI) / 180;
          ctx.rotate(angle);
          ctx.translate(0, -clockWidth / 2);

          ctx.moveTo(0, 0);
          ctx.lineTo(0, 10);
          ctx.stroke();
          ctx.closePath();
          ctx.restore();
          i--;
        }
      }
    }

    function drawHand(length, angle) {
      ctx.save();
      ctx.beginPath();
      ctx.translate(centerX, centerY);
      ctx.rotate((-180 * Math.PI) / 180); // Correct for top left origin
      ctx.rotate((angle * Math.PI) / 180);
      ctx.moveTo(0, 0);
      ctx.lineTo(0, length);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
  }

  tick();
  window.setInterval(tick, 1000);
}
