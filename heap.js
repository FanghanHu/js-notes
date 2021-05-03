class Heap {
    constructor(compare) {
        this.compare = compare;
        this.heap = [];
    }

    insert(...items) {
        for(const item of items) {
            this.heap.push(item);
            this.up_heapify(this.heap.length - 1);
        }
    }

    delete(index) {
        let lastItem = this.heap.pop();
        if(index === this.heap.length) return;
        this.heap[index] = lastItem;
        this.down_heapify(index);
    }

    get(index) {
        return this.heap[index];
    }

    extract() {
        const top = this.get(0);
        this.delete(0);
        return top;
    }

    size() {
        return this.heap.length;
    }

    up_heapify(index) {
        if(index === 0) return;

        const parent = Math.floor((index - 1) / 2);
        if(this.compare(this.heap[index], this.heap[parent]) > 0) {
            this.swap(index, parent);
            this.up_heapify(parent);
        }
    }

    down_heapify(index) {
        let largest = index;
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;

        if(leftChild < this.heap.length && this.compare(this.heap[leftChild], this.heap[largest]) > 0){
            largest = leftChild;
        }
        if(rightChild < this.heap.length && this.compare(this.heap[rightChild], this.heap[largest]) > 0) {
            largest = rightChild;
        }
        if(index !== largest) {
            this.swap(index, largest);
            this.down_heapify(largest);
        }
    }

    swap(a, b) {
        const temp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    }
}


const maxHeap = new Heap((a, b) => a - b);
maxHeap.insert(4,3,2,5,6,3,6,7,8,43,3,76,2,3,5);

const sorted = [];
while(maxHeap.size()) {
    sorted.push(maxHeap.extract());
}
console.log(sorted);