function toPowerOfTwo(arr) {
  return arr.map(val => val ** 2);
}

let input = [1, 2, 3, 4];
let output = toPowerOfTwo(input);
console.log(output); // prints [1, 4, 9, 16]