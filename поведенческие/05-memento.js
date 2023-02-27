class Memento {
  constructor(value) {
    this.storage = value;
  }
}

const helpers = {
  save: (val) => new Memento(val),
  restore: (memento) => memento.storage,
};

class Keeper {
  constructor() {
    this.values = [];
  }

  addMemento(memento) {
    this.values.push(memento);
  }

  getMemento(index) {
    return this.values[index];
  }
}

const keeperInstance = new Keeper();

keeperInstance.addMemento(helpers.save('First Value'));
keeperInstance.addMemento(helpers.save('Second Value'));
keeperInstance.addMemento(helpers.save('Third Value'));

console.log(helpers.restore(keeperInstance.getMemento(0)));
console.log(helpers.restore(keeperInstance.getMemento(2)));
