// Q23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your 
// prediction for the results of each test. Your code should look something like this:
// .let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var cars = 'subaru';
// Teast 1: Equality comparison(true).
console.log("is car == 'subaru'? I predict true.");
console.log(cars == 'subaru');
// Teast 2: Strict equality comparison (true).
console.log("is car === 'subaru'? I predict true.");
console.log(cars === 'subaru');
// Teast 3: Inequality comparison (false).
console.log("is car != 'subaru'? I predict false.");
console.log(cars != 'subaru');
// Teast 4: Strict inequality comparison (false).
console.log("is car !== 'subaru'? I predict false.");
console.log(cars !== 'subaru');
// Test 5: Less than comparison (false):
console.log("is car < 'subaru'? I predict false.");
console.log(cars < 'subaru');
// Test 6: Greater than comparison (false):
console.log("is car > 'subaru'? I predict false.");
console.log(cars > 'subaru');
// Test 7: Less than or equal comparison (true);
console.log("is car <= 'subaru'? I predict true.");
console.log(cars <= 'subaru');
// Test 8: Greater than or equal comperison (true);
console.log("is car >= 'subaru'? I predict true.");
console.log(cars >= 'subaru');
// Test 9: Checking truthiness (true);
console.log("is car ? 'subaru'? I predict true.");
console.log(cars);
// Test 10: Checking falsiness (false);
console.log("is car !? 'subaru'? I predict false.");
console.log(!cars);
