var aritGeo = function(arr) {
    if (arr.length === 0) {
      return 0;
    }
    var isGP = true;
    var isAP = true;
    for (var i = 1; i < arr.length-1; i++) {
      if (arr[i]-arr[i-1] !== arr[i+1]-arr[i])  {
        isAP = false;
      }
      if (arr[i]/arr[i-1] !== arr[i+1]/arr[i])  {
        isGP = false;
      }
    }
    if (isAP){
      return 'Arithmetic';
    } else if (isGP){
      return 'Geometric';
    } else {
      return -1;
    }
};
