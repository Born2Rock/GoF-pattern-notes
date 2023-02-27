/*
 * Позволяет оборачивать общект в класс декоратора и тем самым расширять его возможности
 * Вместо создания большого кол-ва подклассов от базового класса, мы можем применять декораторы для модификации
 * */

class RawChocolate {
  price;
  measure;

  constructor() {
    this.price = 1000;
    this.measure = 'kg';
  }

  getPrice() {
    return this.price;
  }

  getMeasure() {
    return this.measure;
  }
}

class ChocolateCandies extends RawChocolate {
  constructor() {
    super();
    this.price = 600;
    this.measure = 'pack';
    this.description = 'chocolate candies';
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }
}

class Pack {
  chocolateCandies;

  constructor(chocolateCandies) {
    this.chocolateCandies = chocolateCandies;
  }

  getPrice() {
    return this.chocolateCandies.getPrice() + 100;
  }

  getDescription() {
    return this.chocolateCandies.getDescription() + ' + beautiful pack';
  }
}

class Nuts {
  chocolateCandies;

  constructor(chocolateCandies) {
    this.chocolateCandies = chocolateCandies;
  }

  getPrice() {
    return this.chocolateCandies.getPrice() + 50;
  }

  getDescription() {
    return this.chocolateCandies.getDescription() + ' + with nuts';
  }
}

let product = new ChocolateCandies();
product = new Pack(product);
product = new Nuts(product);

console.log(product.getDescription() + ' ' + product.getPrice());
