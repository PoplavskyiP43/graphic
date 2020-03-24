    var a = document.getElementById("canvas");
    var a_context=a.getContext("2d");
    var pi = Math.PI;

    a_context.fillStyle="yellow";
    a_context.arc(700,80,50,0,pi*2);
    a_context.fill();

    a_context.strokeStyle = "#000";
    a_context.fillStyle="green";
    a_context.beginPath();
    a_context.moveTo(200, 550);
    a_context.lineTo(200, 250);

    a_context.moveTo(200,250);
    a_context.lineTo(125,250);

    a_context.moveTo(125,250);
    a_context.lineTo(400,50);

    a_context.moveTo(400,50);
    a_context.lineTo(675,250);

    a_context.moveTo(675,250);
    a_context.lineTo(600,250);

    a_context.moveTo(600,250);
    a_context.lineTo(600,550);

    a_context.moveTo(600,550);
    a_context.lineTo(200,550);
    a_context.closePath();
    a_context.fill();
    a_context.stroke();
/* Домик  */
    a_context.strokeStyle = "green";
    a_context.beginPath();
    for(var i=50;i<750; i+=30){
       for(var j=520;j<550; j+=30){
           a_context.moveTo(i,j);
           a_context.lineTo(i-40, j+50);
           a_context.moveTo(i-40,j+50);
           a_context.lineTo(i-30, j+60);
       }
    }
    a_context.stroke();
    
// 

// 


var canvas = document.getElementById("randomCircle");
  var context = canvas.getContext('2d');
  canvas.height = 400;
  canvas.width = 400;
  
  var numCircles = 500;
  var maxRadius = 20;
  var minRadius = 3;
  var colors =
      ["aqua", "black", "blue", "fuchsia", "green", "cyan", "lime", "maroon",
      "navy", "olive", "purple", "red", "silver", "teal", "yellow", "azure",
      "gold", "bisque", "pink", "orange"];
  var numColors = colors.length;
  
  // в цикле создаём круги
  for(var n = 0; n < numCircles; n++)
  {
    // в случайном порядке установим характеристики
    var xPos = Math.random() * canvas.width;
    var yPos = Math.random() * canvas.height;
    var radius = minRadius + (Math.random() * (maxRadius-minRadius));
    var colorIndex = Math.random() * (numColors - 1);
    colorIndex = Math.round(colorIndex);
    var color = colors[colorIndex];
    drawCircle(context, xPos, yPos, radius, color);
  }
  
  // функция для рисования круга
  function drawCircle(context, xPos, yPos, radius, color)
  {
    var startAngle = (Math.PI / 180) * 0;
    var endAngle = (Math.PI / 180) * 360;
    context.shadowColor = "gray";
    context.shadowOffsetX = 1;
    context.shadowOffsetY = 1;
    context.shadowBlur = 5;
    context.beginPath();
    context.arc(xPos, yPos, radius, startAngle, endAngle, false);
    context.fillStyle = color;
    context.fill();
  }
// 

// 
function clock(){
    var now = new Date();
    var ctx = document.getElementById('clock').getContext('2d');
    ctx.save();
    ctx.clearRect(0,0,150,150);
    ctx.translate(75,75);
    ctx.scale(0.4,0.4);
    ctx.rotate(-Math.PI/2);
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
  
    // Hour marks
    ctx.save();
    for (var i=0;i<12;i++){
      ctx.beginPath();
      ctx.rotate(Math.PI/6);
      ctx.moveTo(100,0);
      ctx.lineTo(120,0);
      ctx.stroke();
    }
    ctx.restore();
  
    // Minute marks
    ctx.save();
    ctx.lineWidth = 5;
    for (i=0;i<60;i++){
      if (i%5!=0) {
        ctx.beginPath();
        ctx.moveTo(117,0);
        ctx.lineTo(120,0);
        ctx.stroke();
      }
      ctx.rotate(Math.PI/30);
    }
    ctx.restore();
   
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr  = now.getHours();
    hr = hr>=12 ? hr-12 : hr;
  
    ctx.fillStyle = "black";
  
    // write Hours
    ctx.save();
    ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20,0);
    ctx.lineTo(80,0);
    ctx.stroke();
    ctx.restore();
  
    // write Minutes
    ctx.save();
    ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28,0);
    ctx.lineTo(112,0);
    ctx.stroke();
    ctx.restore();
   
    // Write seconds
    ctx.save();
    ctx.rotate(sec * Math.PI/30);
    ctx.strokeStyle = "#D40000";
    ctx.fillStyle = "#D40000";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30,0);
    ctx.lineTo(83,0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0,0,10,0,Math.PI*2,true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(95,0,10,0,Math.PI*2,true);
    ctx.stroke();
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.arc(0,0,3,0,Math.PI*2,true);
    ctx.fill();
    ctx.restore();
  
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#325FA2';
    ctx.arc(0,0,142,0,Math.PI*2,true);
    ctx.stroke();
  
    ctx.restore();
  
    window.requestAnimationFrame(clock);
  }
  
  window.requestAnimationFrame(clock);




