class Stack{

    constructor(capacity){
        this.capacity=capacity;
        this.top=-1;
        this.arr=[];
    }

    isFull(){
        return this.top==this.capacity-1;
    }

    isEmpty(){
        return this.top==-1;
    }

    push(item){
        if(this.isFull()){
            console.log("StackOverflow");
            return;
        }

        this.top++;
        this.arr[this.top]=item;
    }

    pop(){
        if(this.isEmpty()){
            console.log("StackUnderflow");
            return;
        }

        let result=this.arr[this.top];
        this.top--;
        return result;
    }

    peek(){
        if(this.isEmpty()){
            console.log("StackUnderflow");
            return;
        }
        return this.arr[this.top];
    }

    size(){
        return this.top+1;
    }
}


let myStack=new Stack(5);

myStack.push(1);

console.log("Peek " + myStack.peek());
console.log("Size "+ myStack.size());

myStack.push(2);
console.log("Peek "+ myStack.peek());
console.log("Size "+ myStack.size());

myStack.push(3);
console.log("Peek "+ myStack.peek());
console.log("Size "+ myStack.size());

myStack.push(4);
myStack.push(5);
console.log("Peek "+ myStack.peek());
console.log("Size "+ myStack.size());
myStack.push(6); // overflow 

myStack.pop();
myStack.pop();
console.log("Peek "+ myStack.peek());
console.log("Size "+ myStack.size());
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();

console.log("Peek "+ myStack.peek());
console.log("Size "+ myStack.size());
console.log("Peek "+ myStack.peek());
console.log("Size "+ myStack.size());
