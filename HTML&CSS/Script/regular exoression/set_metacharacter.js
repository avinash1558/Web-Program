console.log('avinash sharma are have same idea  to do same work as soon as posible');
// let reg = /same/;
// let s = 'aviinash sharma are have same idea  to do avinassaash same avinjash work as soon as posible';

// ^  for starting with
// $  for ending with 
// .  for one character are their 
// *  for zero or more character
// ?  for optional character

//  print to those metachar. so use  \

// reg = /^avinash/;
// reg=/^work/; //it is give error
// let result = reg.exec(s);
// console.log(result);

// reg=/posible$/ ;
// // reg=/avinash$/; //it is give error
// result=reg.exec(s);
// console.log(result);

// reg=/av.nash/g;
// result=reg.exec(s);
// console.log(result);
// result=reg.exec(s);
// console.log(result);

// reg= /avin*ash/g;
// result=reg.exec(s);
// console.log(result);
// result=reg.exec(s);
// console.log(result);
// result=reg.exec(s);
// console.log(result);


// []       for set of Character
// [abc]    for any one
// [^abc]   for not any one
// [A-Z]    for A to Z
// [a-z]    for a to z
// [0-9]    for 0 to 9
// 
// {}       for occurence
// {2}      for two time occurence
// {0,3}    for 0 to 3 time occurence
//(aviash)  for cover the word

let s = "avinash sharma";
let reg = /avinash/;
result = reg.exec(s);
console.log(result);

// reg = /avi[a-z]ash/;
// result = reg.exec(s);
// console.log(result);

// reg = /avi[nas]ash/;
// result = reg.exec(s);
// console.log(result);

reg = /avi[^ash]ash/;
result = reg.exec(s);
console.log(result);

s = "avi0ash avinash sharma";
reg = /avi[0-9]ash/;
result = reg.exec(s);
console.log(result);

s = "avinashh sharma";
reg = /avinash{2}/;
result = reg.exec(s);
console.log(result);

reg = /avinash{0,2}/;
result = reg.exec(s);
console.log(result);

reg = /(avinash){0,2}/;
result = reg.exec(s);
console.log(result);
