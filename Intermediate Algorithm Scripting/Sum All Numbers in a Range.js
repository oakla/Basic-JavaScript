function sumAll(arr) {
    if(arr[0] > arr[1]){
      return sumAll([arr[1], arr[0]]);
    } else if(arr[1] - arr[0] == 0) {
      return arr[0];
    } else if(arr[1] - arr[0] == 1){
      return arr[0] + arr[1];
    } else {
      let rtn_i = arr[0] + arr[1];
      return sumAll([arr[0]+1, arr[1]-1]) + rtn_i;
    }
  }
  
  sumAll([1, 4]);