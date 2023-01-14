function selectio_Sort(arr){
    let n=arr.length;
    let i,j,min_ind;
    for(i=0;i<n;i++){
        min_ind=i;
        

        for(j=i+1;j<n;j++){
            if(arr[j]< arr[min_ind]){
                min_ind=j
            }
        }
        console.log("times  loop run")
        swapp(arr,min_ind,i)
    }

}

function swapp(arr,xp,xy){
       let temp =arr[xp]
        arr[xp]=arr[xy];
        arr[xy]=temp;
}


let arr=[20,15,10,2];
console.log("originall ", arr)
selectio_Sort(arr);
console.log("finaal ", arr)