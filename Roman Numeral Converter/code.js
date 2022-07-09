

function convertToRoman(num) {
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
  let Rnum = "";

  for(let prop in map){
    // start with the biggest roman numeral and see how many times we can subtract it from our number
    const component = map[prop];
    const n = Math.floor(num/component)
    num = num % component;
    Rnum += prop.repeat(n)

  }
  return Rnum;
}
 
a = convertToRoman(36);
console.log(a)

