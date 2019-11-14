class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor(){
        this.head = null;
    }
    // Add Front
    addFront(value){ 
        const node = new Node(value); // creates new Node with value
        node.next = this.head;        // sets the next node as the head?
        this.head = node;             // sets the previous head as a node?

        return this;
    }
    // Remove Front
    removeFront(){
        const node = this.head;
        if (node){
            this.head = node.next;      
        }
        return this;

    }
    // Front - return value at front, not node
    front(){
        // if(this.head){
        //     return this.head.value
        // }
        // else{
        //     return null;
        // }
        // ternary operator expression ? if true :if false
        return this.head ? this.head.value : null;

    }
}
const list = new List();
list.addFront(3).addFront(2).addFront(1).removeFront()
console.log(list)
console.log(list.front())
