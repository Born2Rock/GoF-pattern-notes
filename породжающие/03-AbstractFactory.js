function sweetsAbstractFactory(madeOfChocolate = false) {
  return madeOfChocolate ? chocolateFactory : candiesFactory;
}

function candiesFactory() {
  return new Candies();
}

function chocolateFactory() {
  return new Chocolate();
}

class Candies {
  getDesc() {
    return 'This is Candies';
  }
}
class Chocolate {
  getDesc() {
    return 'This is Chocolate';
  }
}

const candiesProducer = sweetsAbstractFactory(false);
const chocolateProducer = sweetsAbstractFactory(true);

const chocolate = new chocolateProducer();
console.log(chocolate.getDesc());
