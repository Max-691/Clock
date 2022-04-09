let lis = document.querySelectorAll('.huit');
let clock_ul = document.getElementById('clock');
let minutes = 59;
let secondes = 59;


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

    // IF 0
    for (let index = 0; index < time.length; index++) {
      if(time[index] === "0"){
        // TOP DIV
        lis[index].firstElementChild.classList.remove("bas");
        lis[index].firstElementChild.classList.add("gauche");
        lis[index].firstElementChild.classList.add("haut");
        lis[index].firstElementChild.classList.add("droite");
        // BOTTOM DIV
        lis[index].lastElementChild.classList.add("haut");
        lis[index].lastElementChild.classList.add("gauche");
        lis[index].lastElementChild.classList.add("bas"); 
        lis[index].lastElementChild.classList.add("droite");
      }

      // IF 1
      if(time[index] === "1"){
        // TOP DIV
        lis[index].firstElementChild.classList.remove("gauche");
        lis[index].firstElementChild.classList.add("droite");
        lis[index].firstElementChild.classList.remove("bas");
        lis[index].firstElementChild.classList.remove("haut");

        // BOTTOM DIV
        lis[index].lastElementChild.classList.remove("gauche");
        lis[index].lastElementChild.classList.add("droite");
        lis[index].lastElementChild.classList.remove("bas");
        lis[index].lastElementChild.classList.remove("haut");
      }    

      // IF 2
      if(time[index] === "2"){
        lis[index].firstElementChild.classList.add("haut");
        lis[index].firstElementChild.classList.add("droite");
        lis[index].firstElementChild.classList.add("bas");
        lis[index].firstElementChild.classList.remove("gauche");

        // BOTTOM DIV
        lis[index].lastElementChild.classList.add("gauche");
        lis[index].lastElementChild.classList.add("bas");
        lis[index].lastElementChild.classList.add("haut");
        lis[index].lastElementChild.classList.remove("droite");
      }

      // IF 3
      if(time[index] === "3"){
        lis[index].firstElementChild.classList.add("haut");
        lis[index].firstElementChild.classList.add("droite");
        lis[index].firstElementChild.classList.add("bas");
        lis[index].firstElementChild.classList.remove("gauche");

        // BOTTOM DIV
        lis[index].lastElementChild.classList.add("droite");
        lis[index].lastElementChild.classList.add("bas");
        lis[index].lastElementChild.classList.add("haut");
        lis[index].lastElementChild.classList.remove("gauche");
      }

      // IF 4
      if (time[index] === "4"){
        lis[index].firstElementChild.classList.add("gauche");
        lis[index].firstElementChild.classList.add("droite");
        lis[index].firstElementChild.classList.add("bas");
        lis[index].firstElementChild.classList.remove("haut");
        
        // BOTTOM DIV
        lis[index].lastElementChild.classList.add("droite");
        lis[index].lastElementChild.classList.remove("bas");
        lis[index].lastElementChild.classList.add("haut");
        lis[index].lastElementChild.classList.remove("gauche");
      }

      // IF 5
      if (time[index] === "5"){
        lis[index].firstElementChild.classList.add("haut");
        lis[index].firstElementChild.classList.add("gauche");
        lis[index].firstElementChild.classList.add("bas");
        lis[index].firstElementChild.classList.remove("droite");

        // BOTTOM DIV
        lis[index].lastElementChild.classList.add("droite");
        lis[index].lastElementChild.classList.add("bas");
        lis[index].lastElementChild.classList.add("haut");
        lis[index].lastElementChild.classList.remove("gauche");
      }

      // IF 6
      if (time[index] === "6"){
        lis[index].firstElementChild.classList.add("haut");
        lis[index].firstElementChild.classList.add("gauche");
        lis[index].firstElementChild.classList.add("bas");
        lis[index].firstElementChild.classList.remove("droite");

        // BOTTOM DIV
        lis[index].lastElementChild.classList.add("droite");
        lis[index].lastElementChild.classList.add("bas");
        lis[index].lastElementChild.classList.add("gauche");
        lis[index].lastElementChild.classList.add("haut");
      }

      // IF 7
      if (time[index] === "7"){
        lis[index].firstElementChild.classList.add("haut");
        lis[index].firstElementChild.classList.add("droite");
        lis[index].firstElementChild.classList.remove("bas");
        lis[index].firstElementChild.classList.remove("gauche");

        // BOTTOM DIV
        lis[index].lastElementChild.classList.add("droite");
        lis[index].lastElementChild.classList.remove("bas");
        lis[index].lastElementChild.classList.remove("haut");
        lis[index].lastElementChild.classList.remove("gauche");
      }

      if(time[index] === "8"){
        lis[index].firstElementChild.classList.add("haut");
        lis[index].firstElementChild.classList.add("droite");
        lis[index].firstElementChild.classList.add("bas");
        lis[index].firstElementChild.classList.add("gauche");

        // BOTTOM DIV
        lis[index].lastElementChild.classList.add("haut");
        lis[index].lastElementChild.classList.add("droite");
        lis[index].lastElementChild.classList.add("bas");
        lis[index].lastElementChild.classList.add("gauche");
      }

      // IF 9
      if (time[index] === "9"){
        lis[index].firstElementChild.classList.add("haut");
        lis[index].firstElementChild.classList.add("droite");
        lis[index].firstElementChild.classList.add("bas");
        lis[index].firstElementChild.classList.add("gauche");

        // BOTTOM DIV
        lis[index].lastElementChild.classList.add("droite");
        lis[index].lastElementChild.classList.add("bas");
        lis[index].lastElementChild.classList.add("haut");
        lis[index].lastElementChild.classList.remove("gauche");
      }

    }
   
  },1000)

