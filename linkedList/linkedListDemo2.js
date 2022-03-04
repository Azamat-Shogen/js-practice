class Node {
    constructor(val) {
      this.val = val
      this.next = null
    }
  }

  class LList {
    constructor(){
        this.head = null;
    }
    
    // size of the linked list
    size() {
        let count = 0;
        if(this.head){
            let current = this.head;
            while(current){
                current = current.next;
                count++;
            }
        }
        return count;
    }
    // check if the linked list im empty
    isEmpty(){
        return this.size() === 0;
    }

    // add to end of the linked list
    append(val){
        if (this.head === null){
            this.head = new Node(val);
            return;
        }

        let current = this.head;
        while(current.next){ // current.next !== null
          current = current.next;
        }
        current.next = new Node(val);
        return this;
    }

    // add to start
    prepend(val){
        let tempHead = new Node(val);
        tempHead.next = this.head;
        this.head = tempHead;
        return this;
    }

    toArray(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val)
            current = current.next;
        }
        return arr;
    }

    fromArrayIntoLinkedList(arr){
        let list = new LList();
        arr.forEach(val => list.append(val));
        return list
    }

    // return first node with this value
    findByValue(val){
        let current = this.head;
        while(current){
            if(current.val === val){
                return current;
            }
            current = current.next;
        }
        // if value not found, return null
        return null;
    }

    // find by index;
    findByIndex(index){
        if(index >= this.size() || index < 0){
            return null // Index out of bounds
        }
        let current = this.head;
        let count = 0;
        
        while(current){
            if(count === index){
                return current;
            }
            current = current.next;
            count++;
        }
    }

    // get index of Node value
    getIndexOfValue(val){
        let current = this.head;
        let count = 0;
        
        while(current){
            if(current.val === val){
                return count;
            }
            current = current.next;
            count++;
        }

        return null // Value not found;
    }

    // insert node;
    insertNode(index, val){
        if (index >= this.size() || index < 0) {
            return null //"Index out of bounds"
          }
        let current = this.head;
        let count = 0;
     

        while(count < index){
            current = current.next;
            count++;
        }

        let newNode = new Node(val);
        let nextNode = current.next;
        current.next = newNode;
        newNode.next = nextNode;
        return this;
    }

    deleteAtIndex(index){
        if (index >= this.size() || index < 0) {
            return null // "Index out of bounds"
          }

        let current = this.head,
        count = 0,
        previos;

        if(index === 0){
            this.head = current.next;
            current.next = null;
            return this;
        }

        while(count < index){
            previos = current;
            current = current.next;
            count++;
        }

        let nextNode = current.next;
        current.next = null;
        previos.next = nextNode;
        return this

    }

     // Delete a Node if value exists
   // Delete a Node if value exists
   deleteNodeWithValue(val){
    if(this.head === null) return null
    if(this.head.val === val){
       this.head = this.head.next;
       return;
    }

    let current = this.head;
    while(current.next !== null){
        if(current.next.val === val){
          let start = current;
          let end = current.next.next;
          start.next = end;
          return this;
        }
        current = current.next;
      }
      return null
    }

    // reverse linked list by convert to array first.
  // Complexity: O(n) time, O(n) space. Uses more memory.
  reverseLinkedListArray(){
      let reversed = new LList()
      this.toArray().reverse().forEach(val => {
          reversed.append(val);
      })
      return reversed;
  }

  // Reverse Linked List
  reverseLinkedList(){
     // Step 1
     if(this.head === null){
         return this;
     }
        let previous = null,
        current = this.head,
        following = this.head

        // Step 2
        while (current !== null){
        following = following.next;
        current.next = previous;
        previous = current;
        current = following;
        }

        return previous;
  }

  recursive(current){
    if(current === null || current.next === null){
        return current;
    }

    let newHead = this.recursive(current.next);
     // Next node points BACK to current node as we go up recursive ladder. Reverses pointer.
    current.next.next = current;
    current.next = null;
    return newHead;

  }

  }

 
 module.exports = LList

  