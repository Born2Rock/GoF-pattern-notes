class DoorLock {
  unlockGates() {
    console.log('door unlocked');
  }
  lockGates() {
    console.log('door locked');
  }
}

class AuthSystem {
  constructor(doorLock) {
    this.doorLock = doorLock;
  }
  authenticate(pass) {
    return pass === 'secret';
  }
  unlockGates(pass) {
    if (this.authenticate(pass)) {
      this.doorLock.unlockGates();
    } else {
      console.log('Access Denied!');
    }
  }
  lockGates() {
    this.doorLock.lockGates();
  }
}

const authSystem = new AuthSystem(new DoorLock());

const employee1pass = '123';
const employee2pass = 'secret';

authSystem.unlockGates(employee1pass);
authSystem.unlockGates(employee2pass);
authSystem.lockGates();
