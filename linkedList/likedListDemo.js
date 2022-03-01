// class Node
class Node {
    constructor(val){
      this.val = val;
      this.next = null;
    }
}

// linked list class
class LinkedList {
  constructor(){
      this.head = null;
  }

  // append Node value
  append(val){
      if(this.head === null){
          this.head = new Node(val);
          return;
      }

      let current = this.head;
      while(current.next){ // while current.next !== null
         current = current.next;
      }
      current.next = new Node(val);
  }

  // prepend Node value
  prepend(val){
      let newHead = new Node(val);
      newHead.next = this.head;
      this.head = newHead;
  }
  
  // Delete a Node if value exists
  deleteNodeWithValue(val){
      if(this.head === null) return;
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
            return;
          }
          current = current.next;
      }
  }
}