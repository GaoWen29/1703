let fs = require("fs");
let Queue = require("./queue");
function rend(boyqueue, girlqueue) {
    let str = fs.readFileSync("./1703A跳舞舞伴名单.txt", "utf-8").trim();
    let strarr = str.split(/\r\n/);
    for (var item of strarr) {
        let [sex, name] = item.split(" ");
        if (sex == "男") {
            boyqueue.append([sex, name])
        } else {
            girlqueue.append([sex, name])
        }
    }
}
let queue = new Queue();
let boyqueue = new Queue();
let girlqueue = new Queue();
rend(boyqueue, girlqueue)

while (boyqueue.bool() && girlqueue.bool()) {
    console.log(`男生：${boyqueue.del()[1]}`, `舞伴:${girlqueue.del()[1]}`)
}

console.log(queue.toString())