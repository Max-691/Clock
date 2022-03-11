// DOM - Get Article By Their ID
let first_nb = document.getElementById('first_nb');
let second_nb = document.getElementById('second_nb');
let third_nb = document.getElementById('third_nb');
let fourth_nb = document.getElementById('fourth_nb');

// DOM - Get Span By Their Class
// First Article
let f_bar1 = document.getElementsByClassName('f_bar1');
let f_bar2 = document.getElementsByClassName('f_bar2');
let f_bar3 = document.getElementsByClassName('f_bar3');
let f_bar4 = document.getElementsByClassName('f_bar4');
let f_bar5 = document.getElementsByClassName('f_bar5');
let f_bar6 = document.getElementsByClassName('f_bar6');
let f_bar7 = document.getElementsByClassName('f_bar7');

// Second Article
let s_bar1 = document.getElementsByClassName('s_bar1');
let s_bar2 = document.getElementsByClassName('s_bar2');
let s_bar3 = document.getElementsByClassName('s_bar3');
let s_bar4 = document.getElementsByClassName('s_bar4');
let s_bar5 = document.getElementsByClassName('s_bar5');
let s_bar6 = document.getElementsByClassName('s_bar6');
let s_bar7 = document.getElementsByClassName('s_bar7');

// Third Article
let t_bar1 = document.getElementsByClassName('t_bar1');
let t_bar2 = document.getElementsByClassName('t_bar2');
let t_bar3 = document.getElementsByClassName('t_bar3');
let t_bar4 = document.getElementsByClassName('t_bar4');
let t_bar5 = document.getElementsByClassName('t_bar5');
let t_bar6 = document.getElementsByClassName('t_bar6');
let t_bar7 = document.getElementsByClassName('t_bar7');

// Fourth Article
let q_bar1 = document.getElementsByClassName('q_bar1');
let q_bar2 = document.getElementsByClassName('q_bar2');
let q_bar3 = document.getElementsByClassName('q_bar3');
let q_bar4 = document.getElementsByClassName('q_bar4');
let q_bar5 = document.getElementsByClassName('q_bar5');
let q_bar6 = document.getElementsByClassName('q_bar6');
let q_bar7 = document.getElementsByClassName('q_bar7');

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

//span.className = "class"
if (hours === 2) {
  
}