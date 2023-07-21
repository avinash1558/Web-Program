// console.log('avinash sharma');
let reg=/avinash/
// // glabal flag
// reg=/good/g
// // iterater flag
// reg=/soon/i

let s='avinash is good coder in futur and so much good painter and goOd as sOon as'
// // exec()
let result=reg.exec(s)
// console.log(result)
// result=reg.exec(s)
// console.log(result)
// result=reg.exec(s)
// console.log(result)
// console.log(result.index)
// console.log(result.input)

// // test()
// reg=/avinash/
// result=reg.test(s)
// console.log(result)

// // match
// reg=/avinash/
// result=s.match(reg)
// console.log(result)

// // search
// reg=/is/
// result=s.search(reg)
// console.log(result)

// replace
result=s.replace(reg,'place')
console.log(result)

