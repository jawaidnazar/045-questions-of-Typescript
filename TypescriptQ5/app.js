// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
//  Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
//  Then compose your message and store it in a new variable called message. Print your message.
var qoute = "A person who never made a mistake never tried anything new";
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, "once said,").concat(qoute);
console.log(message);
