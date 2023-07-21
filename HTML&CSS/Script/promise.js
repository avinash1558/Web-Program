console.log('avinsh a promise')

function funct() {
    return new Promise((resolve, reject) => {
        let e = true;
        if (!e) {
            console.log('function are resolve')
            resolve()
        } else {
            console.log('function are reject')
            reject('avinash sharma', 'd')
        }
    })
}
// k ,
funct().then(function() {
    console.log('Avinash sharma is resolve')
}).catch(function(e, a) {
    console.log('a inash sharma is reject ' + e + a)
})