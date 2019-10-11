class Queue {
     constructor() {
          this.dataqueue = []
     }
     //队列添加操作
     append(item) {
          this.dataqueue.push(item)
     }
     //查看队列长度
     length() {
          return this.dataqueue.length
     }
     //优先队列删除操作
     del() {
          let n = 0;//开始赋值
          for (let i = 0; i < this.length(); i++) {//循环找到最小的
               if (this.dataqueue[n].code > this.dataqueue[i].code) {
                    n = i;
               }
          }

          return this.dataqueue.splice(n, 1);
     }
     // 显示队列
     toString() {
          for (let i = 0; i < this.length(); i++) {
               console.log(`姓名：${this.dataqueue[i].name};号码：${this.dataqueue[i].code}`)
          }
     }
     //判断队列是否为空
     bool() {
          return this.dataqueue.length > 0;
     }
}

module.exports = Queue;


