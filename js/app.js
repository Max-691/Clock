let clock = document.getElementById('clock');
let div = document.querySelectorAll('div');


let hours = 2;
let hours2 = 4;
let min = 0;
let min2 = 0;


  setInterval(function(){
    min2 --;
    if (min2 < 0) {
      min --;
      min2 = 9;
    }

    if (min < 0) {
      hours2 --;
      min = 5;
    }

    if (hours2 < 0) {
      hours --;
      hours2 = 9;
    }

    if (hours < 0) {
      hours = 2;
      hours2 = 4;
      min = 0;
      min2 = 0;
    }
    console.log(hours, hours2, min, min2);
  },1000)

