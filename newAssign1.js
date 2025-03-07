let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("An error occurred");
    }, 1000);
  });
  
  promise.then((result) => {
    console.log(result);
  });