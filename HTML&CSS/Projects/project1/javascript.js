console.log('magic nodes');
shownotes();

let addbtn = document.getElementById('addbtn');
// console.log(addbtn.innerText)
addbtn.addEventListener("click", function (e) {

    let addtext = document.getElementById('addtxt');
    let addtitle = document.getElementById('addtitle');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteObj = [];
    }
    else {
        // in arry form
        noteObj = JSON.parse(notes);
    }
    // add in arry
    let obj = {
        til: addtitle.value,
        txt: addtext.value
    }
    noteObj.push(obj);
    // set local storage
    localStorage.setItem('notes', JSON.stringify(noteObj));
    addtext.value = "";
    addtitle.value = "";
    console.log(noteObj);
    shownotes();
})
function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }
    // let addtext = document.getElementById('addtxt');
    // let addtitle = document.getElementById('addtitle');
    // let obj = {
    //     til: addtitle.value,
    //     txt: addtext.value
    // }
    let html = "";
    noteObj.forEach(function (e, i) {
        html += `<div class="notecard">
                <div class="card-body">
                <h5 class="card-title">${e.til}</h5>
                <p class="card-text">${e.txt}</p>
                <button id="${i}" onclick=" deletenote(this.id)" class="btn">Delete now</button>
                </div>
                </div>`;
    });
    let notesElm = document.getElementById('nodes');
    // console.log(notesElm)
    if (noteObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `<h1 style="text-align: center; color: rgb(133, 140, 160);"> Add Notes..... </h1>`
    }
}

function deletenote(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }
    noteobj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(noteobj));
    shownotes();
}

let search = document.getElementById('search');
let search_bt = document.getElementById('search_bt');
search.addEventListener('input', function () {
    let inputVal = search.value;
    console.log(inputVal)
    let noteCard = document.getElementsByClassName('notecard');
    search_bt.addEventListener('click', function () {

        Array.from(noteCard).forEach(function (element) {
            // element in chlidnode of div not var. element of div
            // let cardtxt = element.getElementsByTagName("p")[0].innerText;

            let cardtxt = element.querySelector("h5").innerText;
            if (cardtxt.includes(inputVal)) {
                element.style.display = 'block';
            }
            else {
                element.style.display = 'none';
            }
        })

    })
})