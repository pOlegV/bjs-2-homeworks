function getArrayParams(...arr) {
  if (!isNaN(arr[0])){
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < arr.length; i++){
      if (min > arr[i]){min = arr[i]};
      if (max < arr[i]) {max = arr[i]};
      sum += arr[i];
    }
    avg = Number((sum / arr.length).toFixed(2));
    return { min: min, max: max, avg: avg };
  }
  else{return 0;}
} 

function summElementsWorker(...arr) {
  if (!isNaN(arr[0])){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
  }
  else{return 0;}
}

function differenceMaxMinWorker(...arr) {
  if (!isNaN(arr[0])){
    let differenceMaxMin = getArrayParams(...arr);
    let max = differenceMaxMin.max;
    let min = differenceMaxMin.min;
    return max - min;
  }
  else{return 0;}
 
}

function differenceEvenOddWorker(...arr) {
  if (!isNaN(arr[0])){
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 === 0){
        sumEvenElement += arr[i];
      }
      else{
        sumOddElement += arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  }
  else{return 0;}
}

function averageEvenElementsWorker(...arr) {
  if (!isNaN(arr[0])){
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 === 0){
        sumEvenElement += arr[i];
        countEvenElement ++;
      }
    }
    return sumEvenElement / countEvenElement;
  }
  else{return 0;}
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++){
    let maxFunc = func(...arrOfArr[i]);
    if (maxFunc > maxWorkerResult) {maxWorkerResult = maxFunc;}
  }
  return maxWorkerResult;
}
