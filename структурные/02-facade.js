class Conveyor {
  addPack() {
    console.log('candies has been added');
  }
  addNuts() {
    console.log('nuts nas been added');
  }
}

class ConveyorFacade {
  constructor(conveyor) {
    this.conveyor = conveyor;
  }
  createProduct() {
    this.conveyor.addPack();
    this.conveyor.addNuts();
  }
}

const sweetsConveyor = new ConveyorFacade(new Conveyor());
sweetsConveyor.createProduct();
