class MyIterator {
  iterable;
  next;
  hasNext;

  constructor(iterable) {
    this.index = 0;
    this.elements = iterable;
    if (Array.isArray(iterable)) {
      this.next = this.ArrNext;
      this.hasNext = this.ArrHasNext();
    } else if (typeof iterable === 'object') {
      this.keys = Object.keys(iterable);
      this.next = this.ObjNext;
      this.hasNext = this.ObjHasNext();
    } else {
      throw new Error('Argument is not iterable');
    }
  }

  ArrNext() {
    return this.elements[this.index++];
  }

  ArrHasNext() {
    return this.index < this.elements.length;
  }

  ObjNext() {
    return this.elements[this.keys[this.index++]];
  }

  ObjHasNext() {
    return this.index < this.keys.length;
  }
}

const collection = new MyIterator([1, 2, 3, 4, 5]);
console.log(collection.next());
console.log(collection.next());
console.log(collection.next());

const collection2 = new MyIterator({ a: 1, b: 2, x: 9 });
console.log(collection2.next());
console.log(collection2.next());
console.log(collection2.next());
