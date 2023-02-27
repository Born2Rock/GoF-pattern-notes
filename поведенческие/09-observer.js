class RecipeMailingList {
  constructor() {
    this.subscribers = [];
    this.recipesMail = '';
  }

  sendAll() {
    this.subscribers.forEach((s) => {
      s.notify();
    });
  }

  subscribe(observer) {
    this.subscribers.push(observer);
  }

  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter((s) => s.name !== observer.name);
  }
}

class Subscriber {
  constructor(name) {
    this.name = name;
  }
  notify() {
    console.log(`My name is ${this.name} and i have new mail`);
  }
}

const mailingList = new RecipeMailingList();
mailingList.subscribe(new Subscriber('Andy'));
mailingList.subscribe(new Subscriber('Mary'));
const jack = new Subscriber('Jack');
mailingList.subscribe(jack);
mailingList.unsubscribe(jack);
mailingList.sendAll();
