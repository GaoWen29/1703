class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class Linkedlist {
    constructor() {
        this.head = new Node("header")
    }
    //插入
    insert(target, element) {
        let targetNode = this.find(target);
        let elementNode = new Node(element);
        targetNode.next = elementNode;
        elementNode.prev = targetNode;
    }
    //删除
    remove(target) {
        let targetNode = this.find(target);
        let prevNode = targetNode.prev;
        let nextNode = targetNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }
    //向后移动一步
    back(target) {
        let targetNode = this.find(target);
        let nextNode = targetNode.next;
        let prevNode = targetNode.prev;
        nextNode.next = targetNode;
        nextNode.prev = prevNode;
        targetNode.next = nextNode.next;
        targetNode.prev = nextNode;
    }
    //查找元素
    find(element) {
        let targetNode = this.head;
        while (targetNode.element !== element) {
            targetNode = targetNode.next;
        }
        return targetNode;
    }
    //查找最后一项元素
    findlast() {
        let targetNode = this.head;
        while (targetNode.next !== null) {
            targetNode = targetNode.next;
        }
        return targetNode;
    }
    //打印双向链表
    display() {
        let targetNode = this.head;
        while (targetNode.next !== null) {
            targetNode = targetNode.next;
            console.log(targetNode.element)

        }
    }
    //反向打印双向链表
    displayR() {
        let targetNode = this.findlast();
        while (targetNode.prev !== null) {
            console.log(targetNode.element)
            targetNode = targetNode.prev
        }
    }
}

let linkedlist = new Linkedlist();

linkedlist.insert("header", "milk")
linkedlist.insert("milk", "break")
linkedlist.insert("break", "egg")
linkedlist.back("milk")

linkedlist.display()
console.log('--------')
linkedlist.displayR()
