//it is programming to handle pure mathematics function.
//the style focuses on writing the total independent function which does not depend on the varible 


//Pure function
//it is type of function which produce same o/p for same i/p
//it has following properties -predictable,readable,reusable and testable
//it does not depend on outside variable.
//not pure
// let greet= "hello";
// function notPurefuncton(name){
//     return (`${greet} ${name}`)

// }
// console.log(notPurefuncton('rangaswamy'))

// //Pure function
// function pureFunction(name){
//     return `hello ${name}`;
// }
// console.log(pureFunction("rangaswamy"))

//---------------------------------------------------------------------------------------------------------------------

//First class citizens
//function is treated as first class object.
//property of first class object.

// //1.function can be stored in the variable.
// function dd(name){
//     console.log(name);
// }
// let fff= dd;
// fff("rangaswamy")


//2. passed as argument aka. callback.

// function dd(name){
//     console.log(`hello ${name}`);
// }

// function ss(dd, name){
//     dd(name)
// }
// let ff = dd;
// ss(ff,"rangaswamy")


// 3.function can be retured as a value.
// function dd(){
//         function hello(){
//             console.log("hello");
//         }
//         return hello
//     }
// const x= dd();
//     x()

//4.function can be stored in data structure
// function dd(name){
//     console.log(`hello ${name}`);
// }

// const r= [1,2,3];
// r.push(dd);
// console.log(r)
// r[3]("rrr")

//5.function can have their own property.
// function g(){
// }
// g.id=1;
// console.log(g)

//------------------------------------------------------------------------------------------------------

//higher order function.

//function that uses other function as argument or which returns function are knwon as higher order function

//https://www.youtube.com/watch?v=HkWxvB1RJq0

//----------------------------------------------------------------------------------------------------------------

//asynchronous Function

//-------------------------------------------------------------------------------------------------------------------
// function composition
//it takes input from output of previous function.
// const sum = num=>num +num;
// const multi= num=>num*3;
// const divi= num=>num/4

// const s=function (fn1,fn2,fn3,num){
//     const first= fn1(num)
//     const second =fn2(first)
//     const final = fn3(second)
//     return final
// }
// const a=s(sum,multi,divi,10);
// console.log (a)


//----------------------------------------------------------------------------------------------------------

//function immutable.
//we use it to not change value of the parent class.
//if we change the property of the child obj also parent object  changes.
//because the child object is not copying the parent object proprety. but instead its getting the reference(address of property).
//ex1
// const s={
//      name:"rangaswamy",
//      id:45
// }

// const temp= s;
// console.log(temp.name)
// console.log(s.name)

// temp.name="sandeep";
// console.log(temp.name)
// console.log(s.name)

// ex2
// const s={
//     name:"rangaswamy",
//     id:45
// }

// const temp= Object.assign({},s);// object.assign assign(copy) the propertys of s to temp 
// console.log(temp.name)
// console.log(s.name)

// temp.name="sandeep";
// console.log(temp.name)
// console.log(s.name)
//------------------------------------------------------------------------------------------------------------------------
//imperative program
//it is not pure function type.
// let name ="sandeep"

// const ss=()=>{
//     name="sandman"
//     console.log(`hello ${name}`);

// }
// ss();
// console.log(name);

// declarative program
//its pure function type.
// let name ="sandeep"

// const ss=(name)=>{
//     name="sandman"
//     console.log(`hello ${name}`);

// }
// ss();
// console.log(name);

