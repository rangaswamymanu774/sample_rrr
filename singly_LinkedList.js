class listNode{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(head=null){
        this.head=head;
    }

    size(){
        let count=0;
        let node=this.head;
        if(node){
            count++
            node=node.next;
        }
        return count;
    }

    clear(){
        this.head=null;
    }

    getLast(){
        let lastNode=this.head;
        if(lastNode){
            while(lastNode.next){
                lastNode=lastNode.next
            }
        }
        return lastNode;
    }

    getFirst(){
        return this.head;
    }
    print(){
        let current=this.head;
        if(current==null){
            console.log("LinkedList is empty");
            return;
        }
        while(current){
            console.log(current.value);
            current=current.next
        }
        console.log("**************");
    }

    insertAtBegin(value){
        let newNode=new listNode(value);
        newNode.next=this.head;
        this.head=newNode;
    }

    insertAtEnd(value){
        let Node=new listNode(value);
        let current=this.head;
        while(current.next!=null){
            current=current.next;
        }
        current.next=Node;
        Node.next=null;
    }
    getAt(index){
        let counter=0;
        let current=this.head;
        while(current!=null){
            if(counter==index){
                return current;
            }
            counter++;
            current=current.next;
        }
        return null;
    }

    insertAt(value,index){
        if(this.head==null){
            this.head=value;
            return this.head;
        }
        if(index==0){
            return this.insertAtBegin(value);
        }
        const preivious=this.getAt(index-1);
        let newNode= new listNode(value)
        newNode.next=preivious.next;
        preivious.next=newNode;

    }


}

let Node= new listNode(3);
let list= new LinkedList(Node);
list.print()
list.insertAtBegin(5)
list.print()
list.insertAtEnd(7)
list.insertAtEnd(8)
list.insertAtEnd(6)
list.insertAtEnd(2)
list.insertAtEnd(1)
// list.print()
console.log("get at index 2 ", list.getAt(2))
list.insertAt(12,4)
list.print()
console.log(list.size());
console.log(list.getLast())