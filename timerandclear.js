function timer(seconds,duration=100){
    
    let time = seconds
    let v=0
    let id= setInterval(()=>{
      if(v==1){
        clearInterval(id)
        console.log("Completed whith char")
        return 
      }
      else if(time>0){
      console.log("Present time is: "+time+" seconds and Remainig time is: "+ (time-1)+" seconds")
        
      }
      else{
        clearInterval(id)
            // console.log("over")
          console.log("Countdown complete!")
      }
      time-=1
    },duration)
    setTimeout(()=>{
      stopwithchar("c")
    },200)
    // let v=0
    function stopwithchar(s){
      // let id=setTimeout(()=>{
        let str="abcdefghijklmnopqrstuvwxyz"
        if(str.includes(s)){
          // clearTimeout(id)
            // console.log("Stop")
            v=1
        }         
  }
  
// }, 2000)
  
  }
  timer(10)
// }/


// setTimeout(()=>{
//   stopwithchar("c")
// },2000)