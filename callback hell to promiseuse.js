function uploadFile(){
    return new Promise((res,rej)=>{
      setTimeout(()=>{
      console.log("uploading of file is completed")
      res()
      // callback()
    }, 1000);
    })
  }
  function readFile(){
    return new Promise((res,rej)=>{
      setTimeout(()=>{
      console.log("Reading of file is completed")
      res()
      // callback()
    }, 1000);
    })
  }
  function analyzeFile(){
    return new Promise((res,rej)=>{
      setTimeout(()=>{
      console.log("Analyzing of file is completed")
      res()
      // callback()
    }, 1000);
    })
  }
  function compileFile(){
    return new Promise((res,rej)=>{
      setTimeout(()=>{
      console.log("Analyzing of file is completed")
      rej()
      // callback()
    }, 1000);
  })
  }
  uploadFile()
  .then(()=>readFile())
  .then(()=>analyzeFile())
  .then(()=>compileFile())
  .then(()=>{
    console.log("All process completed")
  })
  .catch(()=>{
    console.log("Error Occurs")
  })
  .finally(()=>{
    console.log("Completed the code")
  })
  
  // uploadFile(()=>{
  //   readFile(()=>{
  //     analyzeFile(()=>{
  //       compileFile(()=>{
  //         console.log("All process is completed")
  //       })
  //     })
  //   })
  // })