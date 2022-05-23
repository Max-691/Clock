import './style.css'

let minutes = 24;
let seconds = 0;

const huits = document.querySelector('.huit')
console.log(huits)

const timer = setInterval(()=>{
  let tmp = "";
  if (minutes < 10) {
    tmp += "0" + minutes
  }
  else{
    tmp += minutes;
  }

  if (seconds < 10) {
    tmp += "0" + seconds
  }
  else{
    tmp += seconds;
  }

  for(let i = 0; i < huits.length; i++){
    const huit = huits[i]
    const number = tmp[i]
    for (const tile of huit.children) {
      tile.classList.remove('on')
      tile.classList.add('off')
      if (number === "0") {
        if (tile.classList.contains('top')) {
          tile.classList.remove('off')
          tile.classList.add('on')
        }
      }
    }
  }


  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timer)
    }
    else{
      minutes--
      seconds = 59
    }
  }

  else{ seconds--}
  
}, 100)