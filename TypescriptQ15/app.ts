// Q15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out
//  a new set of invitations. You’ll have to think of someone else to invite.

let guest_list:string[] = ['ali','asad','hina','sajid'];
for(let i=0; i<guest_list.length; i++){
    console.log('Most Respected Sir/Maam '+ guest_list[i] + '\n We invited to u on dinner monday, \n\n Thanks');
}
let refuse_person : string = 'hina';
let new_guest : string = 'zia khan';
guest_list[2] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Most Respected Sir/Maam '+ guest_list[i] + '\n We invited to u on dinner monday, \n\n Thanks');
}

console.log(`Maam, ${refuse_person} Will mot coming on dinner,`);
