// function is blue print .

// function sum(num,num1){
//     a=num+num1;
//     console.log(a)

// }
// sum(1,2)

// function sum1(num,num1){
//     return num+num1;

// }
// console.log(sum1(1,2))

//-------------------------------------------------------------------------------------------------------------

//Default parameters

//Default paramenter allows parameter to have predetermined value in case there is no argumentpassed into the function  or if the argument is undifend when Called. 
//exampl1
// function sum2(num,num1=3){
//     a=num+num1;
//     console.log(a)

// }
// sum2(1)


//example2
// function sum3(num,num1=3){
//     a=num+num1;
//     console.log(a)

// }
// sum3(1,2)

//---------------------------------------------------------------------------------------------


// funtion return 
// when the function is called the computer will run through the function's code and evaluate the result of calling the function.
//by default that resulting value is defined.
//a function returns undefined as defualt as value
//to pass back the information from the function call. we use return statement.
//to create a return statement . we use the return keyword followed by the value that we wish to return.

// sum4(1,2)

// function sum1(num,num1){
//     return num+num1;

// }
// console.log(sum4(1,2))


// Helper function 
// we dont want to everything in single function so we use helper function.
//With the help of helper function we can shorten the big code into small function.
//And call the main function

// function sayHelloGoodMorning(name){
//     console.log(`Hello ${name}` )
//     sayGoodMorning(name)
// }

// function sayGoodMorning(na){
//     console.log(`Good Morning ${na}`);
// }
// sayHelloGoodMorning("Rangaswamy")

//------------------------------------------------


//Benefits of using function
// function is reusable
//


//--------------------------------------------------------------------------------------------

// function Expression
//Another way of to define a function is to use a function expression to define a function inside an experssion.
//we can use the function keyword.
//function name is ommited. a function with no name is called an anonymous function.

//exsaple1 for anyomis function
// const area= function(widht,lenght){
//     return widht*lenght;
// }
// console.log(area(5,6))

//example2
// const calci= function area2(widht,lenght){
//     return widht*lenght;
// }
// console.log(area2(5,6))

//---------------------------------------------------------------------------------------------------------------

//Arrow function or Fat arrow function
//If the Parameter is single no need of () while declaring function.()is required when ther more than one parameter.
//Parameter is value while decalaring the function .ex function count(Parameter,parameter1)
//Agrument is while calling the function value.ex count(agrumnet,argument1) both can be anything.

// const hel=()=>{
//     console.log("hello")
// }
// hel()

// -----------------------------------------------------------------------------------------------

// Function Hoisting 
// it means we can assign a value to the variables before declaring or initialization it.
//greet()
// function greet(){
//     console("hello");
// }
// 


//-----------------------------------------------------------------------------------------------

// function clousre

// function sss(name){
//     console.log(name);
//     return function(){
//         console.log(name+" hi welcome");
//     }
// }
// const a=sss("rangaswamy")
// a()

//---------------------------------------------------------------------------------------------
