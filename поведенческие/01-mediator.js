class DessertSeller {
  constructor() {
    this.clients = [];
  }
  preorder(client, dessert, info) {
    const name = client.getName();
    this.addToClients(name);
    console.log(`Clients name: ${name}. Order dessert is ${dessert}`);
    console.log(`Additional info: ${info}`);
  }
  addToClients(name) {
    this.clients.push(name);
  }
  getClients() {
    return this.clients;
  }
}

class DessertCustomer {
  constructor(name, dessertMediator) {
    this.name = name;
    this.dessertMediator = dessertMediator;
  }
  getName() {
    return this.name;
  }
  makePreorder(dessert, info) {
    this.dessertMediator.preorder(this, dessert, info);
  }
}

const mediator = new DessertSeller();
const customer = new DessertCustomer('Andrew', mediator);

customer.makePreorder('Pie', 'WithApples');

console.log(mediator.getClients());
