class List {
     constructor(dataStore = []) {
          this.dataStore = dataStore;
          this.listSize = this.dataStore.length;
          this.pos = 0;
     }
     //返回数据的长度
     length() {
          return this.listSize
     }
     //插入
     append(elemenr) {
          this.dataStore[this.listSize++] = elemenr
     }
     //返回当前的数据
     toString() {
          return this.dataStore;
     }

     insert(element, after) {
          this.dataStore.splice(this.find(after) + 1, 0, element);
          this.listSize++;
          return this.dataStore;
     }
     //查找下标
     find(element) {
          for (var i = 0; i < this.length(); i++) {
               if (this.dataStore[i] === element) {
                    return i
               }
          }
          return -1
     }
     remove(after) {
          this.dataStore.splice(this.find(after), 1);
          this.listSize--;
     }
     next() {
          // if (this.pos< this.length()-1) {
               return this.pos++
          // } 
     }
     pove() {
          if (this.pos > 0) {
               return this.pos--
          } 
     }
     getelement() {
          return this.dataStore[this.pos]
     }
     currPos(){
           return  this.pos
     }
     moveTo(pos){
           return  this.pos = pos;
     }
     front(){
          this.pos = 0
          return this.dataStore[this.pos];
     }
     end(){
           return this.dataStore[this.length()-1];
     }
     clear(){
           delete this.dataStore;
           this.dataStore  = [];
           this.listSize =  0;
           this.pos = 0;
     }
}

module.exports = List;