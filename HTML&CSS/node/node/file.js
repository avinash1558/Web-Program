//it is module like header file
const date = require('fs');
//it is file read 
//it is synchronous and blocking-->
//it is execute line by line
//ex. readfilesync()
// const a = date.readFileSync('avinash.txt');
// //print the variable
// console.log("avinash");
// console.log(a);
// let c="avinash is good";
// const b = date.writeFileSync("file.txt",c);
// console.log(b);

//it is assynchronous and non-blocking-->
//it is not execute line by line
//it is want callback(like function)
//ex. readfilesync()
date.readFile('avinash.txt', 'utf-8', (error, data) => {
    console.log(error, data);
});
//print the variable
console.log("avinash");
let c = "avinash is good";
date.writeFile("file.txt", c,(error,data)=>{
    console.log(data);
})

