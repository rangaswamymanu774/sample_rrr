
// function bublesort(arr){
//     let n=arr.length;
//     for(let i=0;i<n;i++){

//      for(let j=0;j<n;j++){
//          if(arr[j]> arr[j+1]){
//              let tem=arr[j];
//              arr[j]=arr[j+1];
//              arr[j+1]=tem;
//           }
     
//      }
//  }
// }

// let arr=[5,1,6,3,66,25]
// console.log("original ",arr)
// bublesort(arr)
// console.log("final " , arr)



//-----------------------------------------------------------------------------------------------------------------------


function bublesort(arr){
    let n=arr.length;
    let isswapp=false;
    for(let i=0;i<n;i++){
        isswapp=false;

     for(let j=0;j<n-i-1;j++){
         if(arr[j]> arr[j+1]){// to get the descending order juust change the "<" to">
             let tem=arr[j];
             arr[j]=arr[j+1];
             arr[j+1]=tem;
             isswapp=true;
          }
         console.log("second loop ") // to know no of times looped
     
     }
     if(!isswapp)
     break;
 }
}

let arr=[5,1,6,3,66,25]
console.log("original ",arr)
bublesort(arr)
console.log("final " , arr)