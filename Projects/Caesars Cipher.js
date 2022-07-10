function rot13(str) {
  
    const map = [
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
    ]

    console.log(map.length)

    const arr = str.split("");
    // string to build and return
    let rtn = "";


    for (let i = 0; i < arr.length; i++) {
        const letter = arr[i];
        const pos = map.indexOf(letter);
        
        let out_char = ''
        // if the character is a target, apply ROT
        if(pos != -1){
            const new_pos = (pos + 13) % 26;
            out_char = map[new_pos];
        } else {
            out_char = letter;
        }
        rtn += out_char;
    }

    return rtn;
  }
  
  const a = rot13("SERR PBQR PNZC");
  console.log(a)