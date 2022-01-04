const fs= require('file-system');

// const book={
//     title:"ego",
//     autor:"me"
// }

// const bookJason=JSON.stringify(book);

// fs.writeFileSync('1-jason.json',bookJason)

// const dataBffer=fs.readFileSync('1-jason.json');
// const dataJson=dataBffer.toString();
// const parsed=JSON.parse(dataJson);

// console.log(parsed.title);

const databuffer=fs.readFileSync('1-jason.json');
const dataJson=databuffer.toString();
const user=JSON.parse(dataJson);

user.name="ranjit";
user.age=34;
const userJson=JSON.stringify(user);
console.log(user); 


