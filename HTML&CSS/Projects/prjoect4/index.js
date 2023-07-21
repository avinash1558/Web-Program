console.log('avinash sharma')
let input = document.getElementById('input')
input.addEventListener('blur', function () {
    // e.preventDefault()
    let reg = /^[A-Z]([a-z]){0,10}$/
    let str = input.value
    let h1 = document.createElement('h2')
    h1.innerText = 'massege is run'
    // h1.classList.add('mass')
    if (reg.test(str)) {
        console.log('is match')
        // document.body.appendChild(h1)
    }
    else {
        console.log('is match no match')
        // input.classList.add('error')
        // setTimeout(() => {
        //     input.classList.remove('error')
        // }, 300);
    }
})