class Sweet {
  sugar;
  pack;
  nuts;
  constructor() {
    this.sugar = true;
    this.pack = false;
    this.nuts = false;
  }
}

class SweetsBuilder {
  constructor() {
    this.instance = new Sweet();
  }

  addSugar(dose) {
    this.instance.sugar = dose;
    return this;
  }
  addPack(pack) {
    this.instance.pack = pack;
    return this;
  }
  addNuts() {
    this.instance.nuts = true;
    return this;
  }
  editSugar(dose) {
    this.instance.sugar = dose;
    return this;
  }
  editPack(pack) {
    this.instance.pack = pack;
    return this;
  }
  editNuts(pack) {
    this.instance.nuts = true;
    return this;
  }

  build() {
    return this.instance;
  }
}

const mySweet = new SweetsBuilder().build();
console.log(mySweet);

const mySweet2 = new SweetsBuilder().addPack('cool pack').addNuts().build();
console.log(mySweet2);
