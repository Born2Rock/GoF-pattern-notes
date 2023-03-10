class Sweets {
  constructor(type, weight, measureUnit) {
    this.type = type;
    this.weight = weight;
    this.measureUnit = measureUnit;
  }
}

class sweetsFactory {
  constructor(type) {
    let result;
    switch (type) {
      case 'candies':
        result = new Sweets(type, 1, 'kg');
        break;
      case 'chocolate':
        result = new Sweets(type, 0.4, 'pack');
        break;
      default:
        throw new Error('Wrong type');
    }
    return result;
  }
}

try {
  const candies = new sweetsFactory('candies');
  const chocolate = new sweetsFactory('chocolate');
  new sweetsFactory('trash');
} catch (e) {
  console.error(e);
}
