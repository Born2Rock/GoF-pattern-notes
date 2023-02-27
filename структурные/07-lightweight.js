class Dessert {
  constructor(type) {
    this.type = type;
  }
}

class DessertFactory {
  constructor(dessertName) {
    this.list = {};
  }

  create(dessertName) {
    console.log('create');
    let dessert = this.list[dessertName];
    if (dessert) return dessert;
    this.list[dessertName] = new Dessert(dessertName);
    return this.list[dessertName];
  }

  getList() {
    return this.list;
  }
}

const factory = new DessertFactory();
factory.create('Cookies');
factory.create('Cookies');
console.log(factory.getList());
