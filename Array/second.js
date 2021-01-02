const _ = require('lodash');

//this one is like _.difference, except it accept a criteron as the third argument:
const difference = _.differenceBy([2.3, 1.5], [2.3, 3.4], Math.sqrt);
console.log('this is difference', difference);

const anotherDiff = _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
console.log('another difference',anotherDiff)

const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
const theDifference = _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
console.log(theDifference);