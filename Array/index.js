const _ = require('lodash');

const arr= _.chunk([1,2,3,4,5,6,7,8,9,10],3)
console.log('this is nested arr', arr)

const truthyArr =_.compact([undefined ,0, null, 1, false, 2, '', 3,5,6,0, "hahs", 0])
console.log('arr without falsy value', truthyArr)

const array=[1,2,3,4,5];
const concatenated = _.concat(array, 'hh', '5', 9, [3], [[3]])
console.log('this is concatenated array', concatenated);


const differenceArr = _.difference([1,2,3,4,5], [1])
console.log('this is the difference arr',differenceArr)