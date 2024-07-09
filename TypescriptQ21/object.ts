// Q21 They think of something you could store in a Typescript Object. write a program that creates object containing these 
// items.
// creat objects.
interface item {
    name : string 
    price:number 
}
const book1 : item ={
    name : 'Efective typescript',
    price : 1050
}
const book2 : item ={
    name : 'jsx',
    price : 2500
}
console.log(`book1 name: ${book1.name}, price:Rs${ book1. price}`)
console.log(`book2 name: ${book2.name},  price:Yen${ book2. price}`)




