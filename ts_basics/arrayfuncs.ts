let array = [1,2,3,4,5,6,7,8,9];

console.log(array.reduce((accumulator, value) => accumulator + value));
console.log(array.map((value) => value * 2));
console.log(array.filter((value) => value % 2 == 0));