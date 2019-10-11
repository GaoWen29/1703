class sTack {
   constructor() {
      this.data = [];
      this.index = 0;
   }
   push(item) {
      this.data[this.index++] = item
      console.log(this.data)
   }
   pop() {
      this.data[--this.index]
      let index = this.length()
      this.data.splice(index--, 1)
      console.log(this.data)
   }
   deep() {
      return this.data[this.length() - 1]
   }
   length() {
      return this.index;
   }
}

let stack = new sTack();
stack.push("小红")
stack.push("小蓝")
stack.pop();
console.log("栈顶====", stack.deep())

console.log(stack.length())