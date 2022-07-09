function convertToRoman(num) {

  // get #m's required
  // add to string
  
  // repeat for each letter
  
    var rtn_string = ""
  
    let letters = {
      'I': 1, 
      'IV': 4, 
      'V': 5, 
      'IX': 9, 
      "X": 10, 
      'XL': 40, 
      'L': 50, 
      'XC': 90, 
      'C': 100, 
      'CD': 400, 
      'D': 500, 
      'CM': 900, 
      'M': 1000
    }
  
    let keys = ['I','IV','V','IX',"X",'XL','L','XC','C','CD','D','CM','M'].reverse()
  
    keys.forEach(function(letter) {
      var x = letters[letter]
      var quotient = Math.floor(num/x)
  
      num = num%x
  
      for(var i; i < quotient; i++) {
        rtn_string += rn
      }
    })
  
  
  
  
    return rtn_string;
  }
  
  convertToRoman(36);