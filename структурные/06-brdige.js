class Taste {
  constructor(type) {
    this.taste = type;
  }
  get() {
    return this.taste;
  }
}

class VanillaTaste extends Taste {
  constructor() {
    super('Vanilla');
  }
}

class AppleTaste extends Taste {
  constructor() {
    super('Apple');
  }
}

class Dessert {
  constructor(taste) {
    this.taste = taste;
  }
}

class Cookies extends Dessert {
  constructor(taste) {
    super(taste);
  }
  getInfo() {
    return `Dessert: Cookies, Taste: ${this.taste.get()}`;
  }
}

class Cake extends Dessert {
  constructor(taste) {
    super(taste);
  }
  getInfo() {
    return `Dessert: Cake, Taste: ${this.taste.get()}`;
  }
}

const VanillaCake = new Cake(new VanillaTaste());
const AppleCookies = new Cookies(new AppleTaste());
console.log(VanillaCake.getInfo());
