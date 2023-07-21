console.log('it is mod');
// it is function
function average(arr) {
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum /arr.length;
}
// it is help for other file to this function
//direct export average
// module.exports=average;
// it is export object 
// module.exports={
//     name:"avinash",
//     ave:average
// }
module.exports.name='aviansh';
