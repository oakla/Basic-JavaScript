function reverseString(str) {
    let arr = str.split("")
    let rtn = ""
    for(let i=arr.length-1; i >= 0; i--){
      rtn = rtn + arr[i];
    }
  
  
    return rtn;
  }
  
  let a = reverseString("hello");

  console.log(a)