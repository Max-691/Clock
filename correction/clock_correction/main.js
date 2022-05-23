import './style.css'

let minutes = 24;
let seconds = 0;

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

  console.log(tmp);


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