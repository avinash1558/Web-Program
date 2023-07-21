console.log('avinash sharma')
    // create element
let create_div = document.createElement('div')
    // local storage
    // get value form localstorage
let local = localStorage.getItem('text')
    // add text in div(create_div)

let text_append;
if (local == null) {
    // localstorage is null then
    // text_append = document.createTextNode('avinash is started coding of python and javascript')
    create_div.innerText = "avinash is started coding of python and javascript"

} else {
    // localstorage have value
    // text_append = document.createTextNode(local)
    create_div.innerText = local
}
// create_div.appendChild(text_append)
// set id, class, style
create_div.id = 'id'
create_div.className = 'class'
create_div.setAttribute('style', 'border: 2px solid red; color:red; width:173px;padding:12px; margin: 12px;')
    // select h2
let h2 = document.querySelector('#p2')
console.log(h2)
console.log(create_div)
    // replace with h2
h2.replaceWith(create_div)
    // event listener
create_div.addEventListener('click', function() {
    // length of textarea
    let len = document.getElementsByClassName('textarea').length;
    // console.log(l)
    if (len == 0) {
        let word = id.innerHTML
        create_div.innerHTML = `<textarea name="textarea" id="textarea" class="textarea" cols="4" rows="2"> ${word} </textarea>`

    }
    // select textarea
    let textarea = document.getElementById('textarea')
    textarea.addEventListener('blur', function() {
        // input value of textare
        id.innerHTML = textarea.value;
        localStorage.setItem('text', id.innerHTML)
    })
})