// Creating a stack class
class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push element to the top of the stack
    push(element) {
      this.items.push(element);
    }
  
    // Pop element from the top of the stack
    pop() {
      if (this.items.length === 0) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    // Peek at the top element of the stack
    peek() {
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Print the stack elements
    printStack() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }
  
  // Example usage of the stack class
  
  
 const reDo= new Stack() ;
 const unDo= new Stack();
  
//   if(JSON.parse(localStorage.getItem('stack'))){
//     stack  =JSON.parse(localStorage.getItem('stack'))

//   }else{
//    stack = new Stack();
//   }
  
//   console.log(stack.isEmpty()); // true
//   stack.push(10);
//   stack.push(20);
//   stack.push(30);
//   console.log(stack.printStack()); // 10 20 30
//   console.log(stack.peek()); // 30
//   console.log(stack.pop()); // 30
//   console.log(stack.printStack()); // 10 20
  

const addToUnDo = ()=>{
    if (document.getElementsByTagName('textarea')[0].value != ''){
        const data = document.getElementsByTagName('textarea')[0].value;
        console.log(data)
        unDo.push(data);
        console.log(unDo)
    
    }

}
const addToreDo =()=>{

    const data = document.getElementsByTagName('textarea')[0].value;
    document.getElementsByTagName('textarea')[0].value = ''
    unDo.pop()
    reDo.push(data);
    
    
}
const SecondUnDo = ()=>{
      if(!reDo.isEmpty()){
        const data = reDo.pop();
        document.getElementsByTagName('textarea')[0].value = data;
     
      }
    

}