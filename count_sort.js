// non comparision based algorithm
function countingSort(arr){
    let count=[];
    let k=Math.max(...arr)+1; // find max plus one
    
    for(let i=0;i<k;i++){ // initalize count array to zero
        count[i]=0;
    }

    for(let i=0;i<arr.length;i++){ // increment count for each element
        count[arr[i]]++;
        console.log(count)
    }

    for(let i=1;i<k;i++){ 
        count[i]=count[i-1]+count[i];
    }
    console.log(count)

    let output=[];

    for(let i=0;i<arr.length;i++){
        output[count[arr[i]]-1]=arr[i];
        count[arr[i]]--;
    }

    for(let i=0;i<arr.length;i++){
        arr[i]=output[i];
    }
}

let array=[8,3,5,1,3,8,6,4,3];
console.log("Original Array",array);
countingSort(array);
console.log("Sorted Array",array);