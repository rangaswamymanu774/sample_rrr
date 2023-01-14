function quickSort(arr,low,high){
    if (low<high){
        const pi=parition(arr,low,high)
        console.log(pi,arr[pi],)// to find the current value of pi
        quickSort(arr,low,pi-1);
        quickSort(arr,pi+1,high);
    }
}

function parition(arr,low,high){
    let pivot= arr[high];
    let i=low-1;
    for(j=low;j<=high-1;j++){
        if(arr[j]< pivot){
        i++;
        let temp=arr[j];
        arr[j]=arr[i];
        arr[i]=temp;
    }
    }
    let temp =arr[i+1];
    arr[i+1]=arr[high];
    arr[high]=temp;
    //console.log("proccessing array ", arr)
    return i+1;// return the parition(pivot) position to the quickSort function

}

let arr=[9,88,28,78,54,12,73];
console.log("original array: ", arr)
quickSort(arr,0,arr.length-1)
console.log("final array: ", arr)
