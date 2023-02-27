class Recipe {
  accept(visitor) {
    visitor(this);
  }
}

class ApplePie extends Recipe {
  getInfo() {
    return 'This is apple pie.';
  }
}

class VanillaCookie extends Recipe {
  getInfo() {
    return 'This is vanilla cookie.';
  }
}

function exportVisitor(recipe) {
  console.log(`Info exported: ${recipe.getInfo()}`);
}

const product1 = new ApplePie();
const product2 = new VanillaCookie();

product1.accept(exportVisitor);
product2.accept(exportVisitor);
