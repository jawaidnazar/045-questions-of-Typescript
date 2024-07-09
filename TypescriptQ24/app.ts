// Q24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to
//  try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
let car: string = 'cultus';
let age: number = 35;
let number: number [] =[1,2,3,4];

//  string test
// Test 1 Equailty (true)
console.log("is car == 'cultus'? i predict true.");
console.log(car == 'cultus');

//Test 2 strict Equality (false)
console.log("is car === 'alto'? i predict false");
console.log(car === 'alto');

// Test 3 inequality(true)
console.log("is car !='alto'? i predict true");
console.log(car != 'alto');

// Test 4 inequality (false)
console.log("is car !== 'cultus'? i predict fale");
console.log(car !== 'cultus');

// lowercase function test.
// Test 5 Lowercase converstion (true)
console.log("is car == car.toLowerCase() == 'cultus'?  i predict true");
console.log(car.toLowerCase() == 'cultus');

// Test 6 LowerCase converstion (false)
console.log("is car !== car.toLowerCase()? i predict false");
console.log( car.toLowerCase() !== 'cultus');

// Numerical Test
// Test 7 Equality (true)
console.log("is car age == 35 ? i predict true");
console .log(age == 35);

// Test 8 inequality (false)
console.log("is car age != 35 ? i predict false");
console.log(age != 35);

// Test 9 Greater than (true)
console.log("car age is > 30");
console.log(age >30);

// Test 10 Less than (fals)
console.log("car age is <30 ? i predict false");
console.log(age <30);

// Logical Operators
// Test 11 And (true)
console .log("is age > 30 && age < 40 ? i predict true");
console.log(age > 30 && age < 40);

// Test 12 OR (false)
console.log("is age < 30 || age > 40 ? i predict false");
console.log(age < 30 || age > 40);

// Array Test
// Test 13 In Array (true)
console.log("is 3 in number ? i predict true");
console.log(3 in number);

// Test 14 In Array (false)
console.log("is 6  in number ? i predict false");
console.log(6  in number);























