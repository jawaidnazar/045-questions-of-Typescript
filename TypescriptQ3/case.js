// Q3 Name Cases: Store a person’s name in a variable,
//  and then print that person’s name in lowercase, uppercase, and titlecase.
// lowercase
var personName = "Jawaid";
console.log("lowercase:", personName.toLowerCase());
// uppercase
var personname = "Jawaid";
console.log("uppercase:", personname.toUpperCase());
// Title case
var personNam = "Jawaid";
console.log("titlecase:", personNam.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
