// Only change code below this line

/**
 * 
 * @param {number} n 
 * @returns {Array}
 */
function countdown(n){
    if(n < 1){
      return []
    }
    else {
        const a = countdown(n-1)
        a.unshift(n); // unshift() returns the length of the new array
        return a 
    }
  }

let x = countdown(5);

console.log(x);