class Singleton {
  counter;
  static instance;

  constructor() {
    if (typeof Singleton.instance === 'object') {
      return Singleton.instance;
    }
    Singleton.instance = this;
    this.counter = 0;
    return this;
  }

  plus() {
    this.counter++;
  }
  getCount() {
    return this.counter;
  }
}

const mySingleton1 = new Singleton();
const mySingleton2 = new Singleton();

mySingleton1.plus();
mySingleton2.plus();
mySingleton1.plus();

console.log(mySingleton1.getCount()); //3
console.log(mySingleton2.getCount()); //3
