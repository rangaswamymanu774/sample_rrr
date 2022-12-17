// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const student={
    name:"rangaswamy",
    age:23,
    
}
console.log(student.name)//one way to execute the objects
console.log(student["age"])//second way to execute the objects
//output
//rangaswamy
//23

for(let key in student){
   console.log(key,student)
}

//output
//name {name: 'rangaswamy', age: 23}
//age {name: 'rangaswamy', age: 23}



//Nested object 

const stud={
    name:"rangaswamy",
    details:{
        power:"spider",
        niranjan:"Gaaaandu",
    },  
    age:23,
      
}

console.log(stud.details)
//output
//{power: 'spider', niranjan: 'Gaaaandu'}


const stud1={
    name:"rangaswamy",
    details:{
        power:"spider",
        niranjan:"Gaaaandu",
    },  
    age:23,
    sayHel:function(){
        console.log("hhhhh");
    }
      
}

console.log(stud1.sayHel())
//output
//hhhhh
//undefined (we are not returning it).

//adding the property in object

const stud2={
    name:"rangaswamy",
    details:{
        power:"spider",
        niranjan:"Gaaaandu",
    },  
    age:23,
 //
 //   
}  


stud2.lnmae="manu",// we can add the property /method like this
console.log(stud2)
//output
//{name: 'rangaswamy', details: {…}, age: 23, sayHel: ƒ, lnmae: 'manu'}

///

///
// To access theproperty /method inside the object 
const stud3={
    name:"rangaswamy",
    details:{
        power:"spider",
        niranjan:"Gaaaandu",
    },  
    age:23,
    sayHel:function(){
        console.log(stud3.age)//1.we can access the  property/method inside the object.
        console.log(this.name);//2."this " is used to access the property/method inside the object.
}
}

stud3.sayHel()
//output
//23
//rangaswamy