// Object oriented programming(oops)
//OOPS is the Blueprint(class) with that we can create a object called a instance.
// each instance as unique property which is not shared with other intsance.
//

//Class
//Class are template/blueprint to create object and we can create multiple intsance(object) from that single bluprint
//constructor: it is the deafualt value which our bluprint expects in order to generate the object.
//instance: creating an instance is the final step to crete an object from a bluprint(class). 
//- this is done by "new" keyword
// class car{
//     constructor(door,color){//constructor
//         this.wheel =4;
//         this.door=door;
//         this.color=color;

//     }
//     honk(){
//         console.log("honk.....")
//     }
  
// }

// let BMW=  new car(2,"red");//instance 1
// console.log("BMW")
// console.log(BMW)
// BMW.honk()


// let Mec= new car(4,"silver");//instance 2
// console.log("Mec")
// Mec.honk()
// console.log(Mec.wheel)
// console.log(Mec.color)
//--------------------------------------------------------------------------------------------------------

//extend or inhertie all the property
// class Vehicle{
//     constructor(door,color,wheel){//constructor
//         this.wheel =wheel;
//         this.door=door;
//         this.color=color;

//     }
//     honk(){
//         console.log("honk.....")
//     }
  
// }

// class car1 extends Vehicle{
//     constructor(){
//         super();
//         this.seat=4;
//     }
// };

// let BMW=  new car1(2,"red",4);//instance 
// console.log("BMW")
// console.log(BMW)
// BMW.honk()
//----------------------------------------------------------------------------------------------------------

// Call , Apply,Bind
//bind :With the bind() method, an object can borrow a method from another object.
//E.g.  there were 2 objects - BMW and Mercedes, BMW have some additional methods which are not available in Mercedes. 
//But, Mercedes wants to use those features.



// const BMW = {
//     color: "blue",
//     type: "sedan",
//     safetyEnabled: false,
//     checkSeatBelt: function(){
//         console.log("Safety enabled: "+this.safetyEnabled);
//     }
// }

// const Mercedes = {
//     color: "green",
//     type: "sedan",
//     safetyEnabled: true,
// }

// //borrowing the method 
// const MercSafertyCheck = BMW.checkSeatBelt.bind(Mercedes);
// console.log(MercSafertyCheck());


//-------------------------------------------------------------------------

//Call and Apply
// It allows an object a function, based on the given object.
// E.g - I have made a generic function which would getColor,  and I want to have this function in all the objects. 
// Instead of adding this function in each of the objects, I could write a generic function and use it for everyone.

// const BMW = {
//         color: "blue",
//         type: "sedan",
//         safetyEnabled: false,
//         checkSeatBelt: function(){
//             console.log("Safety enabled: "+this.safetyEnabled);
//         }
//     }
// const TATA ={
//     type:'Suv'
// }
// const HERO ={
//     type:'XUV'
// }

// function carType(NUM1,NUM2){
//     console.log(`car type: ${this.type}`);
//     console.log(NUM1,NUM2)
// }    
// carType.call(BMW)
// carType.call(TATA,2,5)
// carType.apply(HERO,[1,2])//CALL AND APPLY ARE SAME BUT THE DIFFERENT IS WE USE the array to pass the value but in call we use",".
// Apply:It works just like call method, only difference being - in call method we need to pass  the parameters in comma separated. 
//In apply we need to pass the params in Array.

//-------------------------------------------------------------------------------------------------------------------


//JS Prototype

//SOLID

//S - Single Responsibility Principle
// A function must be responsible for just ONE thing.

//O - Open closed principle
//Software entities Class, module, functions should be open for extension but closed for modification

//L - Liskov Substitution Principle
//When we extend classes, The Liskov Substitution Principle (LSP) states that objects of a superclass 
//should be replaceable with objects of its subclasses without breaking the application


// I - Interface segregation principle
//The principles advise Software designers to avoid depending on things they won’t use.

// D - Dependency Inversion principle
//the most flexible systems are those in which source code dependencies refer only to abstractions, not to concretions. Rather, details should depend on policies. 
//E.g. your remote needs a battery and not specific brand of battery.

