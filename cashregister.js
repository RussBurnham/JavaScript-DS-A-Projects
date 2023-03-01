function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;

  let change = [];

  const legend = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let cashRegister = {};
  let totalCashInDrawer = 0;
  for (let i = 0; i < cid.length; i++) {
    let [cashType, amount] = cid[i];
    cashRegister[cashType] = amount;
    totalCashInDrawer += amount;
  }

  if (totalCashInDrawer < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCashInDrawer === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  for (let cashType of Object.keys(legend).reverse()) {
    let value = legend[cashType];
    if (changeDue >= value && cashRegister[cashType] > 0) {
      let count = 0;
      while (changeDue >= value && cashRegister[cashType] > 0) {
        changeDue -= value;
        cashRegister[cashType] -= value;
        count++;
        changeDue = Math.round(changeDue * 100) / 100;
      }
      change.push([cashType, count * value]);
    }
  }
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: change };
}
