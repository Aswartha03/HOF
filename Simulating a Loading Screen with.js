let count=0 
let Id = setInterval(()=>{
    if(count<5){
        console.log("Loading...")
    }
    else if(count==5){
        clearInterval(Id)
        console.log("Loaded Successfully!")
    }
    count++
},1000)