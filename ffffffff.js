// const s = num => num*num;

// const r=num => num**3;

// //const x=s(2);
// const y=r(s(2))
// console.log(y)


// const a= (num) => num+2;
// const b=(num)=> num*2;

// const compse = function(fn,fn1,num){
//     const r =fn(num);
//     const s= fn1(r)
//     return s

//     return fn1(fn(num)) //both action are same

// }

// console.log(compse(a,b,10));



/////////////////immutable program
const obj={
    name:"rrr",
    id:5
}
//const temp =obj; //in this parent object properties will het cjange when you change the child object property.
const temp= Object.assign({},obj);/// we dont want to change the properties parent object(obj) so we so Object.assign({},name of the object).
temp.id=11;
console.log(temp,obj);