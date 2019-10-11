class Heap {
    constructor(arr = []) {
        this.init(arr);
    }
    init(arr) {
        this.heap = []; //下标从1开始
        this.size = arr.length;
        for (let i = 0; i < this.size; i++) {
            this.heap[i + 1] = arr[i];
        }
        console.log('old----', this.heap);
        for (let i = 1; i < this.size + 1; i++) {
            this.min_heap(i);
        }
        console.log('change---', this.heap);
    }
    getLeftInde(i) {
        return i * 2;
    }
    getRightIndex(i) {
        return i * 2 + 1;
    }
    getParentIndex(i) {
        return Math.floor(i / 2);
    }
    min_heap(i) {
        let left = this.getLeftInde(i);
        let right = this.getRightIndex(i);
        let min = i;
        //left
        if (left <= this.size && this.heap[min] > this.heap[left]) {
            min = left;
        }
        //right
        if (right <= this.size && this.heap[min] > this.heap[right]) {
            min = right;
        }
        if (min !== i) {  //树杈位置不对
            // min 父节点的正确位置
            // i 当前父节点的下标
            this.extchange(min, i);
            this.min_heap(min);
            let parentIndex = this.getParentIndex(i);
            this.min_heap(parentIndex);
        }
    }
    extchange(n, n1) {
        let val = this.heap[n]; //树杈最小值
        this.heap[n] = this.heap[n1];//最小值的位置放原来的父节点位置的值
        this.heap[n1] = val;  //父节点放最小值
    }
    inHeap(item) {
        this.heap.push(item);
        this.size++;
        let parent = this.getParentIndex(this.heap.length - 1);
        this.min_heap(parent);
    }
    outHeap() {
        this.heap.splice(1, 1);
        this.size--;
        this.min_heap(1);
    }
    outValueHeap(item) {
        let i = this.heap.indexOf(item);
        this.heap.splice(i, 1);
        this.size--;
        let parent = this.getParentIndex(i);
        this.min_heap(parent);
    }
}

let arr = [11, 30, 16, 12, 19, 29, 10, 18, 15];
let oHeap = new Heap(arr);