//let a=1;
//let b="1";

// console.log(Boolean("dgjjhhblkkjgjl"));
function is(arr){
    let n =arr.length;
    let i,j,key;
    for(i=1;i<n;i++){
        key=arr[i];
        j=i-1;
        while(j>=0 && arr[j]> key){
           arr[j+1]=arr[j];
           j=i-1;
           console.log("aaa")
        }
        arr[j+1]=key;
    }
}

let arr=[2,1,6,12,10,3]
console.log("original ",arr);
is(arr)
console.log("final ",arr)