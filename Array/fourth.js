const _ =require('lodash');

const arr =[1,2,3,4,5];
const arrFilledWithA = _.fill(arr, 'a')
const arrFilledWith2 = _.fill(Array(3),2)
const arrFillCustom = _.fill([1,2,3,4,5], 'ha',1,3)

console.log(arrFilledWithA)
console.log(arrFilledWith2)
console.log(arrFillCustom)
