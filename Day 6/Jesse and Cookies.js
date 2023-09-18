reachMinSweatness = (arr, target) => {
    const minHeap = new Heap();
    arr.forEach(el => minHeap.add(el));
    let count = 0;
    
    while (minHeap.min() < target) {
        if (minHeap.length() === 1) return -1;
        const firstMin = minHeap.extractMin();
        const secondMin = minHeap.extractMin();
        const combinedMins = firstMin * 1 + secondMin * 2;
        minHeap.add(combinedMins);
        count += 1;
    }
    
    return count;
}

class Heap {
    constructor() {
        this.store = [];
    }
    
    length() {
        return this.store.length;
    }
    
    min() {
        return this.store[0];
    }
    
    add(el) {
        this.store.push(el);
        this.heapifyUp();
    }
    
    extractMin() {
        const min = this.store[0];
        this.store[0] = this.store[this.store.length - 1];
        this.store.pop();
        this.heapifyDown();
        return min;
    }
    
    heapifyUp() {
        let currentElIdx = this.store.length - 1;
        let parentIdx = Math.floor((currentElIdx - 1) / 2);
        
        while (parentIdx >= 0 && this.store[currentElIdx] < this.store[parentIdx]) {
            const hold = this.store[currentElIdx];
            this.store[currentElIdx] = this.store[parentIdx];
            this.store[parentIdx] = hold;
            
            currentElIdx = parentIdx;
            parentIdx = Math.floor((currentElIdx - 1) / 2);
        }
        
        return this.store;
    }
    
    heapifyDown() {
        let parentIdx = 0;
        let childIndices = this.getChildIndices(parentIdx);
        
        while (childIndices.length > 0 
               && this.store[childIndices[0]] < this.store[parentIdx]
               || (childIndices[1] && this.store[childIndices[1]] < this.store[parentIdx])) {
            
            if (childIndices[1] && this.store[childIndices[1]] < this.store[childIndices[0]]) {
                const hold = this.store[childIndices[1]];
                this.store[childIndices[1]] = this.store[parentIdx];
                this.store[parentIdx] = hold;
                
                parentIdx = childIndices[1];
                childIndices = this.getChildIndices(parentIdx);
            } else {
                const hold = this.store[childIndices[0]];
                this.store[childIndices[0]] = this.store[parentIdx];
                this.store[parentIdx] = hold;
                
                parentIdx = childIndices[0];
                childIndices = this.getChildIndices(parentIdx);
            }
        }
        
        return this.store;
    }
    
    getChildIndices(parentIdx) {
        const childIndices = [];
        if ((parentIdx * 2 + 1) < this.store.length) childIndices.push(parentIdx * 2 + 1);
        if ((parentIdx * 2 + 2) < this.store.length) childIndices.push(parentIdx * 2 + 2);
        return childIndices   
    }
}


function processData(input) {
    const [metaData, data] = input.split('\n');
    const [n, target] = metaData.split(' ');
    const arr = data.split(' ').map(el => parseInt(el));
    const h = new Heap();

    console.log(reachMinSweatness(arr, target));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});