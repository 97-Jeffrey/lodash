const _ = require('lodash');

// drop from left:
const array =[1,2,3,4,5,6];
const arr1 = _.drop(array,1)
const arr2 = _.drop(array,3)
const arr3 = _.drop(array,6)
console.log(arr1)
console.log(arr2)
console.log(arr3)

// drop from right:
const arr4 = _.dropRight(array,1)
const arr5 = _.dropRight(array,3)
const arr6 = _.dropRight(array,6)
console.log(arr4)
console.log(arr5)
console.log(arr6)


const users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

const array1 = _.dropRightWhile(users, user=>!user.active);
const array2 = _.dropRightWhile(users,{ 'user': 'pebbles', 'active': false })
const array3 = _.dropRightWhile(users, ['active', false]);
const array4 = _.dropRightWhile(users, 'active');
console.log('this is array1', array1)
console.log('this is array2', array2)
console.log('this is array3', array3)
console.log('this is array4', array4)