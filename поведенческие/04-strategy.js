function kpiStrategyStd(n) {
  return n;
}

function kpiStrategyBonus(n) {
  return n * 1.15;
}

class SalaryCalc {
  constructor(kpiStrategy) {
    this.kpiStrategy = kpiStrategy;
    this.basicSalary = 0;
  }
  checkoutSalary() {
    return this.kpiStrategy(this.basicSalary);
  }
  setBasicSalary(basicSalary) {
    this.basicSalary = basicSalary;
  }
}

const basicWorkerSalaryCalc = new SalaryCalc(kpiStrategyStd);
basicWorkerSalaryCalc.setBasicSalary(250000);
console.log(basicWorkerSalaryCalc.checkoutSalary());

const xpWorkerSalaryCalc = new SalaryCalc(kpiStrategyBonus);
xpWorkerSalaryCalc.setBasicSalary(250000);
console.log(xpWorkerSalaryCalc.checkoutSalary());
