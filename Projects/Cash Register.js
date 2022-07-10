function checkCashRegister(price, cash, cid) {
  const rtn = {
    status: "INSUFFICIENT_FUNDS",
    change: []
  }

  

  let distance = cash - price;

  for(let i=cid.length-1; i>=0; i--){
    let value_i = cid[i][1]; // the amount available for this denomination
    if(value_i > distance){
      continue;
    } else {
      distance -= value_i;
      rtn.change.push(cid[i]);
    }
  }

  if

  const cid_total = MATH.sum(cid.values)
  let change_needed = cash - price;



  if(cid_total < total_change){
    
  }


  return rtn;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);