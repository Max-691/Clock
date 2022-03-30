let lis = document.querySelectorAll('.huit');

let minutes = 59
let secondes = 59


const timer = setInterval(function(){
    if (secondes == 0) {
      secondes = 59;
      if(minutes == 0){
        clearInterval(timer);
      } else {
        minutes--;
      }
    } else {
      secondes--;
    }
    let time = "";
    if(minutes < 10){
      time += "0" + minutes;
    } else {
      time += minutes;
    }
    if(secondes < 10){
      time += "0" + secondes;
    } else {
      time += secondes;
    }
    for (let index = 0; index < time.length; index++) {
      if(time[index] === "0"){
        lis[index].firstElementChild.classList.remove("bas");
        lis[index].firstElementChild.classList.add("gauche haut droite");
        lis[index].firstElementChild.classList.remove("haut");
        lis[index].firstElementChild.classList.add("gauche bas droite");
      }
      
    }
    console.log(time);
  },100)

