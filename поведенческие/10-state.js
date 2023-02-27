class DessertStatus {
  constructor(statusName, nextStatus) {
    this.statusName = statusName;
    if (nextStatus) this.nextStatus = nextStatus;
  }
  next() {
    if (this.nextStatus) return new this.nextStatus();
  }
}

class Cooking extends DessertStatus {
  constructor() {
    super('Cooking', Baking);
  }
}

class Baking extends DessertStatus {
  constructor() {
    super('Baking', Eating);
  }
}

class Eating extends DessertStatus {
  constructor() {
    super('Eating');
  }
}

class Dessert {
  constructor() {
    this.status = new Cooking();
  }
  nextState() {
    this.status = this.status.next();
  }
}

debugger;
const dessert = new Dessert();
console.log(dessert.status.statusName);
dessert.nextState();
console.log(dessert.status.statusName);
