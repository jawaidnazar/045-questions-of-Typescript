// Q12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, but each message should be personalized
//  with the person’s name.

let members: string [] =['ali','asad','sajid','saqib','abid'];
let message: string= 'how are u ';
for(let i=0;i<members.length;i++){
    console.log(message+members[i]);
}


