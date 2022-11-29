"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0){
    return (arr = []);
  }else if (d === 0){
    arr.push(-b/(2*a)); 
  }else if (d > 0){
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (!isNaN(percent) && !isNaN(contribution) && !isNaN(amount) && !isNaN(countMonths)){
    let s = amount - contribution;
    let p = percent / 100 / 12;
    let pay = s * ( p + ( p / ((Math.pow(( 1 + p ), countMonths )) - 1 )));
    let allPay = pay * countMonths;
    return parseFloat(allPay.toFixed(2));
  }
  return false;
}