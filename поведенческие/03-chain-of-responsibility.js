class DeliveryCourier {
  constructor(workHoursFrom, workHoursTo) {
    this.workHoursFrom = workHoursFrom;
    this.workHoursTo = workHoursTo;
  }
  deliver(currentHour) {
    this.currentHour = currentHour;
    if (this.canDeliver()) {
      console.log('Will be delivered by ' + this.name);
      return;
    }
    if (this.nextCourier) {
      console.log('Cant deliver with ' + this.name);
      this.nextCourier.deliver(currentHour);
      return;
    }
    console.log('Can not be delivered', this.name);
  }

  canDeliver() {
    return (
      this.workHoursFrom < this.currentHour &&
      this.currentHour < this.workHoursTo
    );
  }

  setNext(employee) {
    this.nextCourier = employee;
  }
}

class DriverCourier extends DeliveryCourier {
  constructor(workHoursFrom, workHoursTo) {
    super(workHoursFrom, workHoursTo);
    this.name = 'Driver';
  }
}

class WalkingCourier extends DeliveryCourier {
  constructor(workHoursFrom, workHoursTo) {
    super(workHoursFrom, workHoursTo);
    this.name = 'Walking';
  }
}

const walking = new WalkingCourier(8, 20);
const driver = new DriverCourier(6, 23);

walking.setNext(driver);
walking.deliver(22);
