function checkCashRegister(price, cash, cid) {
    const rtn = {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  
    const value_map = {
      "Penny":	0.01,
      "Nickel":	0.05,
      "Dime":	0.1,
      "Quarter":	0.25,
      "One":	1,
      "Five":	5,
      "Ten":	10,
      "Twenty":	20,
      "One-hundred": 100
    }
  
    const cid_total = MATH.sum(cid.values)
    let change_needed = cash - price;
  
    function get_change(){
      const arr = Object.keys(value_map).reverse()
      arr.forEach((a,b,c) => {
        let denomination = value_map[a];
        let factor = Math.floor(price/value_map[a]);
        change_needed -= factor
      })
      total_change
    }
  
    if(cid_total < total_change){
      
    }
  
  
    return rtn;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);