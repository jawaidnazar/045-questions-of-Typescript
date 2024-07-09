// Q15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out
//  a new set of invitations. You’ll have to think of someone else to invite.
var guest_list = ['ali', 'asad', 'hina', 'sajid'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Most Respected Sir/Maam ' + guest_list[i] + '\n We invited to u on dinner monday, \n\n Thanks');
}
var refuse_person = 'hina';
var new_guest = 'zia khan';
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Most Respected Sir/Maam ' + guest_list[i] + '\n We invited to u on dinner monday, \n\n Thanks');
}
console.log("Maam, ".concat(refuse_person, " Will mot coming on dinner,"));
