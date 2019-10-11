let Queue = require("./youxianduilei");

class Client {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}

let a = new Client("a", 1);
let b = new Client("b", 10);
let c = new Client("c", 3);

let pos = new Queue();

pos.append(a)
pos.append(b)
pos.append(c)
pos.del();
pos.toString()


