// Q3 Name Cases: Store a person’s name in a variable,
//  and then print that person’s name in lowercase, uppercase, and titlecase.

// lowercase
 let personName:string="Jawaid"
 console.log("lowercase:", personName.toLowerCase());

// uppercase
let personname:string="Jawaid"
console.log("uppercase:", personname.toUpperCase());

// Title case
let personNam:string="Jawaid"
console.log("titlecase:",personNam.replace(/\bw/g,c => c.toUpperCase()));
