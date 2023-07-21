// b=12;
// if (b==12) {
//     // throw new ErrorEvent('hey its number')
//     throw new Error('hey its number')
//     // throw new MediaError('hey its number')
// }
try {
    a=avian       
} catch (error) {
    // console.log(`${error}:it is run`)
    console.log(`${error.name}:${error.message}`)
}finally{
    console.log('finally error mila hai')
}