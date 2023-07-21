console.log('aviansh ka word character')

// \w  for one alphanumeric word
// \w+ for alphanumeric word in end of time for word 
// \W  for not alphanumeric word (@ $)
// \W+ for not alphanumeric word in end of time for word 
// \d  for digit or number
// \d+ for digit or number in end of time for word 
// \D  for not digit or number
// \D+ for not digit or number in end of time for word 
// \s  for white space
// \s+ for white space in end of time for word 
// \S  for not white space (a 12AA A)
// \S+ for not white space in end of time for word 
// \b  for at end of this 
// 1(?=2)for 2 are come to next of 1
// 1(?!2)for 2 are not come to next of 1


// let s = "9vi0ash avinash sharma";
// let reg = /\wvi[0-9]ash/;
// result = reg.exec(s);
// console.log(result);
// s = "avi0ash avinash sharma";

// reg = /\wvinash/;
// result = reg.exec(s);
// console.log(result);

// reg =/\w+vinash/
// s="a9vinash avinash sharma"
// result=reg.exec(s)
// console.log(result)

// reg =/\Wvinash/g
// s="@vinash avinash sharma"
// result=reg.exec(s)
// console.log(result)

// s="@#vinash avinash sharma"
// reg =/\W+vinash/g
// result=reg.exec(s)
// console.log(result)

// let s = "9vi0ash avinash sharma";
// let reg = /\dvi[0-9]ash/;
// result = reg.exec(s);
// console.log(result);

// reg =/\d+vinash/
// s="9999vinash avinash sharma"
// result=reg.exec(s)
// console.log(result)

// reg =/\Dvinash/g
// s="@vinash avinash sharma"
// result=reg.exec(s)
// console.log(result)

// s="@#vinash avinash sharma"
// reg =/\D+vinash/g
// result=reg.exec(s)
// console.log(result)

// let s = " vi0ash avinash sharma";
// let reg = /\svi[0-9]ash/;
// result = reg.exec(s);
// console.log(result);

// reg =/\s+vinash/
// s="   vinash avinash sharma"
// result=reg.exec(s)
// console.log(result)

// reg =/\Svinash/g
// s="@vinash avinash sharma"
// result=reg.exec(s)
// console.log(result)

// s="abjgvinash avinash sharma"
// reg =/\S+vinash/g
// result=reg.exec(s)
// console.log(result)

let s = " vi0ash avinash sharma";
let reg = /vi[0-9]ash\b/;
result = reg.exec(s);
console.log(result);

reg =/a(?=v)vinash/
s="avinash sharma"
result=reg.exec(s)
console.log(result)

reg =/@(?!n)vinash/
s="@vinash avinash sharma"
result=reg.exec(s)
console.log(result)

