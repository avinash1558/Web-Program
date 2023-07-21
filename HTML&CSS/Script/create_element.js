console.log('create_element.js')

// create element 
let create = document.createElement('li')
    // give id and class
create.id = 'avinash'
create.className = 'name'

create.setAttribute('style', 'border: 2px solid red; color:red')

// let text =document.createTextNode('avinash is started coding of python and javascript')
// create.appendChild(text)
create.innerText = 'avinash is started coding of python and javascript'
let ul = document.querySelector('ul')
    // Array.from(ul).forEach(element => {
    //     console.log(ul)
    // });
    // console.log(ul)
ul.appendChild(create)

// let li=document.querySelector('ul li')
// let li=document.querySelector('#li')
let li = document.getElementById('li')
    // console.log(li)
ul.insertBefore(create, li)
localStorage.setItem('name', create.innerText)
    // replace
    // li.replaceWith(create)
    // ul.replaceChild(create,li)
    // remove
    // ul.removeChild(li)
    // create.removeAttribute('style')
console.log(create)