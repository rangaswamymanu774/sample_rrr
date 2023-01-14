// function mergesort(arr){
//     let mid= Math.floor(arr.length/2);

//     if(arr.length<=1){
//         return arr;

//     }
//     let left=arr.splice(0,mid);
//     let right=arr;

//     const leftArry=mergesort(left);
//     const rightArry=mergesort(right);

//     const final=merge(leftArry,rightArry);
//     return final;
// }

// function merge(left,right){
//     let sortedarry=[]

//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             sortedarry.push(left.shift())
//         }
//         else{
//             sortedarry.push(right.shift())
//         }
//     }
//     return [...sortedarry,...left,...right];
// }


function mergesort(arr,left,right){
    if(left<=right){
        let mid=(left+(right-left))/2;
        mergesort(arr,left,mid);
        mergesort(arr,mid+1,right);
        merge(arr,left,right);
       
    }
}

function merge(arr,left,right){

        while(left.length && right.length){
            if(left[0]<right[0]){
                arr.push(left.shift())
            }
            else{
                arr.push(right.shift())
            }
        }
        return [...arr,...left,...right]; 
}

let arr=[6,5,7,2,0];
console.log("orginal ",arr);
let result=mergesort(arr,0,arr.length-1);
console.log("final ", result)