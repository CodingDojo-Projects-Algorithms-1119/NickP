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
        if(this.isEmpty()){
            return false;
        }
        let nodeCount = 0;          // counter variable
        this.traverse(function(){   // callback
            nodeCount++;            // works because nodeCount is still kept in memory when func was created.
        })
        return nodeCount;
    }
    print(){                        // function to print out all list values as string
        if(this.isEmpty()){
            return false;
        }
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
        if(this.isEmpty()){
            return false;
        }
        let max = this.head.value
        this.traverse(function(node){
            if (node.value > max){
                max = node.value;
            }
        })
        return max;
    }
    min(){
        if(this.isEmpty()){
            return false;
        }
        let min = this.head.value
        this.traverse(function(node){
            if(node.value < min){
                min = node.value;
            }
        })
        return min;
    }
    average(){
        if(this.isEmpty()){
            return false;
        }
        let sum = 0;
        this.traverse(function(node){
            sum += node.value
        })
        return sum/(list.length);
    }
    lastNode(callback){
        let backNode = 0;
        this.traverse(function(node){
            backNode = node;
            callback(backNode);
        })
    }
    back(){
        if(this.isEmpty()){
            return false;
        }
        let backVal = 0;
        this.lastNode(function(node){
            backVal = node.value;
        })
        return backVal;
    }
    secondBackNode(){
        let currentNode = this.head;
        let secondBack = 0;
        while(currentNode.next != null){
            secondBack = currentNode;
            currentNode = currentNode.next;
        }
        return secondBack;
    }
    removeBack(){
        if(this.isEmpty()){
            return false;
        }
        let newBack = 0;
        newBack = this.secondBackNode();
        newBack.next = null
        return this;
    }
    addBack(val){
        if(this.isEmpty()){
            this.addFront(val);
        }
        let lastNode = 0;
        this.lastNode(function(node){
            lastNode = node;
        })
        lastNode.next = new Node (val);
        return this;
    }
    secondToLast(){
        if(this.isEmpty()){
            return false;
        }
        if (this.length<2){
            return "Too Short"
        }
        let secondToLastNode = 0;
        secondToLastNode = this.secondBackNode();
        return secondToLastNode;
    }
    removeSelf(delNode){
        if(this.isEmpty()){
            return false;
        }
        let nodeToDel = 0;
        let counter = 1;
        this.traverse(function(node){
            if(counter == delNode){
                nodeToDel = node;
            }
            counter++;
        })
        if (delNode == this.length){
            this.removeBack();
            return this;
        }
        if (delNode > this.length){
            return false;
        }
        let runner = nodeToDel.next;
        while (runner){
            nodeToDel.value = runner.value;
            nodeToDel = runner;
            runner = runner.next;
        }
        this.removeBack()
        return this;
    }
    copy(){
        if(this.isEmpty()){
            return false;
        }
        const listCopy = new List();
        this.traverse(function(node){
            listCopy.addBack(node.value);
        })
        return listCopy;
    }
    filter(lowVal, highVal){
        if(this.isEmpty()){
            return false;
        }
        let counter = 0;
        let toRemove = []
        this.traverse(function(node){
            counter++;
            if(node.value < lowVal || node.value > highVal){
                toRemove.push(counter)
                counter--;
            }
        })
        for(var i = 0; i<toRemove.length;i++){
            this.removeSelf(toRemove[i])
        }
        return this;
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
console.log("the back value: ", list.back())                      // val of last node, 5
list.removeBack();                                                // removes the final node in list.
console.log("after removeBack:");                                 // current list: 2,3,4
list.print();
console.log("adding a value to end:");
console.log(list.addBack(30));                                    // current list: 2,3,4,30
list.print();
console.log("second to last node:", list.secondToLast())
console.log("Delete node:", list.removeSelf(2))                // node 2 with value of 3.
console.log("------")
list.addBack(40);
list.addBack(41);
list.addBack(42);
list.addBack(43);                                                // increase size for testing
list.print();                                                    // 2,4,30, 40, 41, 42, 43
list.copy();                                                     // listCopy created within scope and returned
list.filter(30,42);                                              // new list: 30, 40, 41, 42
console.log("filtered list:")
list.print()