/**
 * Can Place Flowers

   You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

   Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
 */

//using for loop
let arr = [1, 0, 0, 0, 1];
let n = 2;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    let l = i === 0 || arr[i - 1] === 0;
    let r = i === arr.length - 1 || arr[i + 1] === 0;
    if (l & r) {
      arr[i] = 1;
      count++;
    }
  }
}
console.log(count >= n);

//using wile loop
let arr = [1, 0, 0, 0, 1];
let n = 2;
let count = 0;
let i = 1;
while (i > arr.length) {
  if (arr[i] === 1) {
    i += 2;
  } else {
    if (
      (i === 0 || arr[i - 1] === 0) &&
      (i === arr.length - 1 || arr[i + 1] === 0)
    ) {
      count++;
      i += 2;
    } else {
      i++;
    }
  }
}
console.log(count >= n);
