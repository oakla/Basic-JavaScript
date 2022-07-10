function checkCashRegister(price, cash, cid) {
  const rtn = {
    status: "INSUFFICIENT_FUNDS",
    change: []
  }

  const cid_total = cid.reduce((a,b) => a+b[1],0) * 100;

  const value_map = {
    "PENNY":	0.01,
    "NICKEL":	0.05,
    "DIME":	0.1,
    "QUARTER":	0.25,
    "ONE":	1,
    "FIVE":	5,
    "TEN":	10,
    "TWENTY":	20,
    "ONE HUNDRED": 100
  }

  let distance = (cash - price) * 100;
  
  if(cid_total > distance){
    for(let i=cid.length-1; i>=0; i--){
      let denomination_name = cid[i][0];
      let denomination_value_per_unit = value_map[denomination_name] * 100;
      // how many times does this denomination divide into distance
      let capacity_units = Math.floor(distance/denomination_value_per_unit);
      // how many units of this denomination do we have
      let value_i = cid[i][1] * 100; // the amount available of this denomination
      let available_units = Math.floor(value_i/denomination_value_per_unit);
      // get the lowest of the two above numbers
      let return_units = (capacity_units < available_units) ? capacity_units : available_units;
      // add change to array
      let impact = denomination_value_per_unit * return_units;
      if(impact > 0){
        rtn.change.push([denomination_name, impact/100])
      }
      // calculate how much more change is required
      distance -= impact;
    }
    if(Math.round(distance) === 0){
      rtn.status = "OPEN";
    } else if(distance > 0){
      rtn.change = [];
    }
  } else if(cid_total === distance){
    rtn.change = cid;
    rtn.status = "CLOSED";
  } 
  return rtn;
}

// checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01], 
//   ["NICKEL", 2.05], 
//   ["DIME", 3.1], 
//   ["QUARTER", 4.25], 
//   ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]
// ]);

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 

// should return 
a = {
  status: "OPEN", 
  change: [
    ["TWENTY", 60], 
    ["TEN", 20], 
    ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]
}