const circles = document.querySelectorAll(".circle");
const values = document.querySelectorAll("#value");

let counter = 0;
let end = [20,10,50];
let speed = 50;


function createBar(circle, value, counter,end) {

    let progress = setInterval(()=>{
      counter++;
      value.innerHTML= counter + '%';
      circle.style.background =
      
      `conic-gradient(rgb(17,255,8)
      
      ${counter*3.6}deg,
      rgb(0,0,0,0.1) 0deg) `;
      
      if(counter === end){
      clearInterval(progress);
          }
      },   speed);

  }


  for (let i = 0; i < circles.length; i++) {
    createBar(circles[i], values[i],counter,end[i]);
  }