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
    isEmpty(){  // check if is empty to prevent repetition
        return this.head == null //? true : false;  <--- boolean is T/F anyways, so can skip that
    }
    contains(value){
        if(this.isEmpty()){
            return false;
        }
        // go through the list, with while loop
        let runner = this.head; // beginning of list
        while (runner){
            if (runner.value === value){
                console.log("found it:", runner.value)
                return true;
            }
            console.log("in loop with runner at", runner.value)
            runner = runner.next;
        }
        console.log("didn't find it:", value)
        return false;
    }
    get length(){                   // placing "get"  makes it a propery, instead of a property
        let nodeCount = 0;          // counter variable
        let runner = this.head;     // set runner to start at first node, the head
        while(runner){              // while runner exists and not null
            nodeCount++;
            runner = runner.next;
        }
        return nodeCount;
    }
}
const list = new List();
list.addFront(5).addFront(4).addFront(3).addFront(2).addFront(1)  // creates node with 5, then places 4 in front, etc
console.log("list:", list)                                        // 1 2 3 4 5
console.log("removed front node:", list.removeFront())            // 2 3 4 5
console.log(list.front())                                         // lists the value of first node(2)
console.log(list.contains(4), list.contains(423))                 // true and false, respectively
console.log("the length is ", list.length)                        // no () because we made it a property (like arrays). yield is still 4 