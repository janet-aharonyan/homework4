

// ex 1.


function fibonacci(n){
  let result = [1, 1];
  for(let i = 2; ; i++){
    let nextToPush = result[i - 2] + result[i - 1]
    if(n <= nextToPush ){
      return result;
    }
    result.push(nextToPush );
  }
}





// ex 2.


let sumAndCalc = number => {
  let numberStr = number + '';
  let sum = 0;
  let product = 1;
  let answer;
  for(let i = 0 ; i < numberStr.length; i++){
    sum += (+numberStr[i] * 1);
    product *= numberStr[i];
  }
 if(product % sum === 0){
   return product / sum;
 }else{
   return product % sum;
 }
 }





// ex 3.


function maxAndMin(arr){
  let max = arr[0];
  let min = arr[0];
  for(let i = 0; i < arr.length; i++){
    if(max <= arr[i]){
      max = arr[i]
    }if(min > arr[i]){
      min = arr[i]
    }
  }
  if(arr.length(max - min)){
    return true;
  }else{
    return false;
  }
}




// ex 4.


let secondMaximumElement = arr => {
  let max = arr[0], secondIndex, index;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondItem = max;
      secondIndex = index;
      max = arr[i];
      index = i;
    }
  }
  return secondIndex;
}
console.log(secondMaximumElement([-60, 2, 43, -18, 5, -19, 36, 7, 56]));





// ex 5.


function paddingAmountAndRepeatCount (arr, pad, rep){
  let start =  [];
  let end = [];
  let start_rep = [];
  let end_rep = [];
  start = arr.slice(0, pad);
  end = arr.slice(arr.length - pad);
  for(let i = 0; i < rep; i++){
    for(let j = 0; j < pad; j++){
      start_rep.push(start[j]);
      end_rep.push(end[j]);
    }
  }
  for (let i = 0; i < start_rep.length; i++){
    arr.unshift(start_rep[start_rep.length - i - 1]);
    arr.push(end_rep[i]);
  }
  return arr;
  }






// ex 6.


function printRectangle(k){
  let row = "";
  for(let i = 1; i <= k; i++){
    for(let j = 1; j<= k; j++){
      row+= " * ";
    }
    row+="\n";
  }
  return (row);
}
console.log(printRectangle(5));





// ex 7.


function printRectangle(k){
  let row = "";
  for(let i = 0; i < k; i++) {
    for(let j = 0; j < k; j++) {
      if (i >= 1 && j >= 1 && i <= 3 && j <= 3) {
        row += "  ";
      } else {
        row += "* "
      }
    }
    row += "\n"
  }
  return row;
}
console.log(printRectangle(5));





// ex 8.


function patternNumber(number){
  let result = 0;
  let n;
  let m;
  for(let i = 1; i <= number; i++){
    for(let j = 1; j<= i; j++){
      result+=j;
    }
    result+= "\n";
  }
  for(let i =(number - 1); i>= 1; i--){
    for(let j = 1; j<=i; j++){
      result+=j;
    }
    result+="\n";
  }
  return result;
}
console.log(patternNumber(5));




