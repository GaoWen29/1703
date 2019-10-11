class  Queue{
     constructor (){
          this.dataqueue = []
     }
     //队列添加操作
     append(item){
          this.dataqueue.push(item)
     }
     //删除
     del(){
          return  this.dataqueue.shift();
     }
     // 显示队列     
     toString(){
          return this.dataqueue;
     }
     //判断队列是否为空
     bool(){
          return this.dataqueue.length > 0;      
     }
}

module.exports = Queue;


