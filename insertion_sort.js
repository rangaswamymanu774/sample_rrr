function insertion_Sort(arr){
    let n=arr.length;
    let i,j,key;
    for(i=1;i<n;i++){
        key=arr[i];
        j=i-1;
        while(j>=0 && arr[j]> key){
            arr[j+1]= arr[j]
            j=j-1
        }
        arr[j+1]=key;
    }
}

let arr=[2,1,6,12,10,3]
console.log("original ",arr);
insertion_Sort(arr);
console.log("finaal ",arr)