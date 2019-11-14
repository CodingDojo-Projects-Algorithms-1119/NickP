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
    front(){                                // Front - return value at front, not node
        // if(this.head){
        //     return this.head.value
        // }
        // else{
        //     return null;
        // }
        // ternary operator expression ? if true :if false
        return this.head ? this.head.value : null;
    }
    isEmpty(){                          // check if is empty to prevent repetition
        return this.head == null        //? true : false;  <--- boolean is T/F anyways, so can skip that
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
    get length(){                   // placing "get"  makes it a propery, instead of a function
        let nodeCount = 0;          // counter variable
        this.traverse(function(){   // callback
            nodeCount++;            // works because nodeCount is still kept in memory when func was created.
        })
        return nodeCount;
    }
    print(){                        // function to print out all list values as string
        // let runner = this.head;
        // while (runner){
        //     console.log("Node has value of: ", runner.value);
        //     runner = runner.next;
        // }
        // switching to callback to prevent repetition
        this.traverse(function(node){
            console.log("Node has value of: ", node.value)
        });
        return this;
    }
    traverse(callback){
        let runner = this.head
        while (runner){
            callback(runner)
            runner = runner.next;
        }
    }
    max(){
        let max = this.head.value
        this.traverse(function(node){
            if (node.value > max){
                max = node.value;
            }
        })
        return max;
    }
    min(){
        let min = this.head.value
        this.traverse(function(node){
            if(node.value < min){
                min = node.value;
            }
        })
        return min;
    }
    average(){
        let sum = 0;
        this.traverse(function(node){
            sum += node.value
        })
        return sum/(list.length);
    }

}

const list = new List();
list.addFront(5).addFront(4).addFront(3).addFront(2).addFront(1)  // creates node with 5, then places 4 in front, etc
console.log("list:", list)                                        // 1 2 3 4 5
console.log("removed front node:", list.removeFront())            // 2 3 4 5
console.log(list.front())                                         // lists the value of first node(2)
console.log(list.contains(4), list.contains(423))                 // true and false, respectively
console.log("the length is ", list.length)                        // no () because we made it a property (like arrays). yield is still 4 
list.print()                                                      // console logs every node value (2 3 4 5)
console.log("max value: ", list.max())                            // max value (5)
console.log("min value: ", list.min())                            // min value (2)
console.log("Average value: ", list.average())                    // avg value ((2+3+4+5)/4) = 3.5