class SweetsProto {
  constructor(type, weight, measureUnit) {
    this.type = type;
    this.weight = weight;
    this.measureUnit = measureUnit;
  }

  create() {
    return new SweetsProto(this.type, this.weight, this.measureUnit);
  }
}

const candiesPrototype = new SweetsProto('candies', 1, 'kg');

const candies1 = candiesPrototype.create();
const candies2 = candiesPrototype.create();

candies1.weight = 2;

console.log(candies1, candies2);
