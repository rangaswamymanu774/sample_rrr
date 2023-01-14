// JavaScript single-threaded model
// JavaScript is a single-threaded programming language. This means that JavaScript can do only one thing at a single point in time.
// The JavaScript engine executes a script from the top of the file and works its way down. It creates the execution contexts, pushes, and pops functions onto and off the call stack in the execution phase.
// If a function takes a long time to execute, you cannot interact with the web browser during the function’s execution because the page hangs.
// A function that takes a long time to complete is called a blocking function. Technically, a blocking function blocks all the interactions on the webpage, such as mouse click.
// An example of a blocking function is a function that calls an API from a remote server.
// The following example uses a big loop to simulate a blocking function:


//------------------------------------------------------------------------------------------------------------------

//Call stack 
//Below program shows how call stack works.
// function task(message){//2.1. when the functioned is called.it will come to here
//     let n =10;//2.2. task is performed.
//     while(n>0){
//         n--
//     }
//     console.log(message)//2.3. after the task in the function is performedthe mesage is pushed to call stack to be printed
// }// task will be removed from the call stack
// console.log("fkjf");// 1.this is pushed to call stack.And it is printed and then it is removed from the call stack
// task("download a file");//2.calling of function is pushed to call stack.
// console.log("download complete");//3. then this line is sent to call stack.

//---------------------------------------------------------------------------------------------------------------------

//Blocking function
// In the above program while loop is block function because it will not allow the js processor to do other work 
//till it complete decreament the n to 0.
// to over come the this issues we use call back.

// Call back
//we can function as Argument
// function gr(name){
//     name()
// }
// function sa(){
//     console.log("hello")
// }
// gr(sa);

//setTimeOut
//this call back its basic accept the function which it will execute after certain given time with delay.
//example1
// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,4000)
//The setTimeout() method executes a block of code after the specified time.
//example2
// setTimeout(()=>{
//     console.log("fu*k")
// },4000)

//setInterval
//this call back it basically accept the function which it will execute contiuneslly after every certain given time.
// setInterval(()=>{
//      console.log("fu*k")},4000)
   