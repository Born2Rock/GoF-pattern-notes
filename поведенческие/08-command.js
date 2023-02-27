class Baker {
  constructor(command) {
    this.command = command;
  }
  execute() {
    this.command.execute();
  }
}

class Dessert {
  constructor() {
    this.inOven = false;
  }
  placeToOven() {
    this.inOven = true;
  }
  replaceFromOven() {
    this.inOven = false;
  }
}

class PlaceDesertToOven {
  constructor(dessert) {
    this.dessert = dessert;
  }
  execute() {
    this.dessert.placeToOven();
    console.log('The dessert has been placed');
  }
}

class ReplaceDesertFromOven {
  constructor(dessert) {
    this.dessert = dessert;
  }
  execute() {
    this.dessert.replaceFromOven();
    console.log('The dessert has been replaced');
  }
}

const bakeCommand = new PlaceDesertToOven(new Dessert());
const bakingBaker = new Baker(bakeCommand);
bakingBaker.execute();
