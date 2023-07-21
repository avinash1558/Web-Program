console.log('prototype')


// const obj = {
//     a: 'b'
// }
// let avinash = Object.create(obj);
// console.log(avinash.a='v')

function constructer(a, b) {
    this.avinash = a;
    this.age = b;
    this.func = function () {
        console.log('object orientetion programming');
    }
}
constructer.prototype.avinash = function () {
    return 'object orientetion programming'
}
function inhritance(a, b, c) {
    constructer.call(this, a, b);
    this.cal = c;
}
inhritance.prototype = Object.create(constructer.prototype)
inhritance.prototype.constructer = inhritance;
let avinash = new inhritance('avinash', 15, 'id');
console.log(avinash.cal)