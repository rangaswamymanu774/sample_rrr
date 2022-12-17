//javascript set is a collection of unique values
//each value can only occur once in set.
//it can hold any value of any data types


const heroes= new Set();
heroes.add("spider-man")
heroes.add("iron-man")
heroes.add("spider-man")
heroes.add("ant-man")
heroes.add("captain")
function ss(value){
    console.log(value)
}
console.log(heroes)
//output
//Set(4) {size: 4, spider-man, iron-man, ant-man, captain}

//it won't repeat the same value twice all the value in the sets are unique
//Sets are same as Array but in array we can repeat the same value n-times but in sets it won't allow duplication of same value.

//-----------------------------------------------------------------

//delete
heroes.delete("captain")
console.log(heroes)
//output
//Set(3) {size: 3, spider-man, iron-man, ant-man}

//----------------------------------------------------------------------------

//foreach

heroes.forEach(ss);
//output
//spider-man
//iron-man
//ant-man





