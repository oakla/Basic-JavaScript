

function convertToRoman(num) {
  // a lookup table
  const map ={
    M 	:1000,
    CM 	:900,
    D 	:500,
    CD 	:400,
    C 	:100,
    XC 	:90,
    L 	:50,
    XL 	:40,
    X 	:10,
    IX 	:9,
    V 	:5,
    IV 	:4,
    I 	:1
  }
  // string that we will build up as the return value
  let Rnum = "";

  // for each roman numeral in the lookup table, check if applies
  for(let prop in map){
    // start with the biggest roman numeral and see how many times we can subtract it from our number
    const value = map[prop];
    const n = Math.floor(num/value)
    num = num % value;
    Rnum += prop.repeat(n)
  }
  return Rnum;
}
 
a = convertToRoman(36);
console.log(a)

