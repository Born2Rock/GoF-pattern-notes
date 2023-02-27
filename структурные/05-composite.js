class ingredient {
  price;
  name;

  getPrice() {
    return this.price || 0;
  }
  getName() {
    return this.name;
  }
  setPrice(price) {
    return (this.price = price);
  }
  setName(name) {
    return (this.name = name);
  }
}

class Meat extends ingredient {
  constructor() {
    super();
    this.setName('Meat');
    this.setPrice(600);
  }
}

class Rice extends ingredient {
  constructor() {
    super();
    this.setName('Rice');
    this.setPrice(150);
  }
}

class Composite extends ingredient {
  constructor() {
    super();
    this.ingredients = [];
  }
  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }
  getPrice() {
    return this.ingredients
      .map((ingredient) => ingredient.getPrice())
      .reduce((sumPrice, currentPrice) => sumPrice + currentPrice);
  }
}

class Plov extends Composite {
  constructor() {
    super();
    this.setName('Plov');
  }
}

const dish = new Plov();
dish.addIngredient(new Meat());
dish.addIngredient(new Rice());

console.log(`My dish is ${dish.name} Total price is ${dish.getPrice()}`);
