function binary_serach(arr,element){
    let low=0;
    let high=arr.length-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr[mid]==element)
            return mid;
        else if(arr[mid]>element){
            high=mid-1;
            return high;
        }
        else{
            low=mid+1;
            return low;
        }
    }
    return -1;
}

function binary_serachRec(arr,low,high,element){
    if(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr[mid]==element)
            return mid;
        else if(arr[mid]>element){
            return binary_serachRec(arr,low,mid-1,element);
        }
        return binary_serachRec(arr,mid+1,high,element);
}
    return -1;
}


let arr=[1,2,3,4,5,6]

console.log(binary_serach(arr,5));
console.log(binary_serachRec(arr,0,arr.length-1,0));


