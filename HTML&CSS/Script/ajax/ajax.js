console.log('avinash a ajax');

// create ajax
// let ajax = new XMLHttpRequest();
// // ajax.open('GET','url',true);
// // ajax.open('GET', 'menu.html', true);
// ajax.open('GET', 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001', true);

// ajax.onreadystatechange = function() {
//     //readyState give the value of state 
//     console.log(`the state ${ajax.readyState}`);
// }
// ajax.onprogress = function() {
//     console.log('i am on progress you are reddy')
// }
// ajax.onload = function() {
//     let li = document.getElementById('li')
//         // responseText is give the entire content of the file
//     li.innerHTML = `${this.responseText}`
// }
// ajax.onloadend = function() {
//     let li = document.getElementById('p2')
//     li.innerHTML = `${this.responseText}`
// }
// ajax.send()


let ajax = new XMLHttpRequest();
// ajax.open('POST', 'url', true);
ajax.open('POST', 'https://reqbin.com/sample/post/json', true);
ajax.getResponseHeader('Content-type', 'application/json')
ajax.onreadystatechange = function() {
    console.log(`the state ${ajax.readyState}`);
}
ajax.onprogress = function() {
    console.log('i am on progress you are reddy')
}
ajax.onload = function() {
    let li = document.getElementById('li')
    li.innerHTML = `${this.responseText}`
}
ajax.onloadstart = function() {
    let li = document.getElementById('li')
    li.innerHTML = `${this.responseText}`
}
ajax.onloadend = function() {
    let li = document.getElementById('p2')
    li.innerHTML = `${ajax.readyState}`
}
let p = '{"avibaba":"good"}';
ajax.send(p)