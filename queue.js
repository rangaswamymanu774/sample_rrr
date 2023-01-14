class queue{
    constructor(capacity){
        this.capacity=capacity;
        this.front=0;
        this.size=0;
        this.arr=[];
    }
    inFull(){
        return this.size==this.capacity;
    }

    inEmpty(){
        return this.size==0
    }

    Enqueue(item){
        if(this.inFull()){
            console.log("queue is full");
            return;
        }
        let rear=(this.front+this.size-1)%this.capacity;
        rear=(rear+1)%this.capacity;
        this.arr[rear]=item;
        this.size++
        console.log(item + " enqueued successfully")

    }

    Dequeue(){
        if(this.inEmpty()){
         console.log("queue is empty");
         return   
    
        }
        let result=this.arr[this.front];
        this.front=(this.front+1)%this.capacity;
        this.size--
        console.log("dequeued :"+result);
        return result;
    
    }
    peek(){
        if(this.inEmpty()){
            console.log("queue is empty");
            return   
       
           }
         return this.arr[this.front];
         //return result  

    }

}

let myQueue= new queue(3)
myQueue.Enqueue(1);
console.log("peek " + myQueue.peek())
myQueue.Enqueue(2);
console.log("peek " + myQueue.peek())
myQueue.Enqueue(10);
myQueue.Enqueue(20);
myQueue.Enqueue(30);
console.log(myQueue.size)
myQueue.Dequeue()
console.log("peek " + myQueue.peek())
myQueue.Dequeue()
console.log("peek " + myQueue.peek())
myQueue.Dequeue()
console.log("peek " + myQueue.peek())

// myQueue.Dequeue()
// //console.log("peek" + myQueue.peek())
// myQueue.Enqueue(1);
// console.log(myQueue.size)
// myQueue.Enqueue(2);
// console.log(myQueue.size)
// console.log("peek " + myQueue.peek())
// myQueue.Enqueue(3);
// console.log(myQueue.size)
// myQueue.Enqueue(4);//queue full
// console.log(myQueue.size)

// console.log("peek " + myQueue.peek())
// myQueue.Dequeue();
// myQueue.Dequeue();
// myQueue.Dequeue();
// console.log(myQueue.size)
