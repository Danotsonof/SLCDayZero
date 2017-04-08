function getPrimes(num) {
  var arrayPrime = [2,3];

  function isPrime (num) {
    for(var j=div;j>1 ;j--) {
      if (temp%j===0) {
        return false;
      }
    }
    return true;
  }

  if (typeof(num) !== "number"){
    return -1;
  }
  if (num < 2 ){
      return -1;
  }
  if (num===2){
    return [2];
  }
  if (num ===3){
    return [2,3];
  }

  var temp=4;

  while (temp <= num) {
    var div= Math.floor(Math.sqrt(temp));
    var flag=true;
    if (isPrime()){
      arrayPrime.push(temp);
    }
    temp++;
  }
  return arrayPrime;
}
