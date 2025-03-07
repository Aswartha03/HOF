function timer(seconds,duration=100){
    let time = seconds
    let id= setInterval(()=>{
      if(time>0){
      console.log("Present time is: "+time+" seconds and Remainig time is: "+ (time-1)+" seconds")
        
      }
      else{
        clearInterval(id)
            // console.log("over")
          console.log("Countdown complete!")
      }
      time-=1
    },duration )
  }
  timer(10)