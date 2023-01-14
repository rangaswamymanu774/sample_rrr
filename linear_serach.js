function linear_serach(arr,element){
    let n=arr.length;
    for(let i=0;i<n;i++){
        if(arr[i]==element){
            console.log("Element found")
             return
        }
        
    }
     console.log("element not found")
}

let arr=[1,5,6,88,4,15]
linear_serach(arr,88)