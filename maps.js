//map holds key-value pairs where key can be any datatype
//map remebers the original insertion order of the keys
//map has property that represent the size of the map
//map is another way its called object.
//we use map instead of object because while programming we cant use the object name again once its assigned, so we use map for that.

const obj= new Map();
obj.set("fname","rangaswamy")
console.log(obj)
//output
//Map(1) {size: 1, fname => rangaswamy}
//----------------------------------------------------------

//get
console.log(obj.get("fname"))
//output
//rangaswamy

//get is used to display the value(rangaswamy) of key (fname)

//-------------------------------------------------------------------------

//has
console.log(obj.has("fname"))
//output
//true

//has is used to check wheather the key is present in maps or not