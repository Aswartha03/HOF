console.log("Begin")
setTimeout(() => { console.log("Timeout Task"); }, 0)
Promise.resolve().then(() => { console.log("Promise Task"); })
console.log("End")
// Output of above code should be following sequence
//Begin
// End
// Promise Task
// Timeout Task
// Explanation :
// the code contains both synchronous and asynchronous statements
// so JS executes synchronous code first then it goes to  asynchronous code
// that's why first comes Begin first follows End . Because those are synchronously coded.
// After completing  sync code execution JS go to Async code
//  this code contains two  async statements which are coded using setTimeout and Promise
// First JS executes Promise code and follows setTimeout code
// that's the reason we get Promise Task first rather than Timeout Task
// FInally, Our output order should be as follows
// Sync-> promise-> setTimeout 

