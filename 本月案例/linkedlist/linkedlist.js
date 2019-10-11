class Node{
    constructor(element){
         this.element = element;
         this.next = null;
    }
}

class LinkedList{
     constructor(){
         this.head = new Node("header");
     }
     insert(target,element){
            target = this.find(target);
            element = new Node(element);
            element.next = target.next;
            target.next = element;
     }

     remove(target){
          let targetNode =  this.find(target)
          let provNode = this.head;
          while(provNode.next.element !== target && provNode !== null){
               provNode = provNode.next;
          }
          provNode.next = targetNode.next;
     }
     
     find(target){
          let targetNode = this.head;
          while(targetNode.next !== null){
                targetNode = targetNode.next;
                if(targetNode.element === target){
                     return targetNode;
                }
          }
          return  targetNode;
     }

     display(){
          let targetNode = this.head; 
          while(targetNode.next !== null){
             targetNode = targetNode.next; 
             console.log(targetNode.element)
          }
     }
}

let  linkedlist = new LinkedList();
linkedlist.insert("header","milk");
linkedlist.insert("milk","bread");
linkedlist.insert("bread","mantou");
linkedlist.insert("mantou","egg");
linkedlist.remove("mantou");
linkedlist.remove("egg");

linkedlist.display()