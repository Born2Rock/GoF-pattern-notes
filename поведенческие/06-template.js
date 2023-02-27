class DessertTemplate {
  build() {
    this.addSugar();
    this.addTaste();
    this.bake();
  }
}

class VanillaCakeRecipe extends DessertTemplate {
  addSugar() {
    console.log('add 100gr sugar');
  }
  addTaste() {
    console.log('Add vanilla taste');
  }
  bake() {
    console.log('Baking 200% 15 mins');
  }
}

class ApplePieRecipe extends DessertTemplate {
  addSugar() {
    console.log('add 200gr sugar');
  }
  addTaste() {
    console.log('Add apple taste');
  }
  bake() {
    console.log('Baking 160% 20 mins');
  }
}

new VanillaCakeRecipe().build();
new ApplePieRecipe().build();
