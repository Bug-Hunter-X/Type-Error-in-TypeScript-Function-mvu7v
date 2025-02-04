function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error('Invalid input: Both parameters must be numbers.');
  }
}

let result1 = addSafe(1, 2);  // Correct: Returns 3
let result2 = addSafe(1, '2'); // Throws an error
console.log(result1); //3
//Or by Type assertion:
let result3 = add(1, <number><unknown>'2'); //This is not recommended.