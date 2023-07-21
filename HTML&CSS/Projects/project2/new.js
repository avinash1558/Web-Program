console.log('avinash ki library hai')
ShowTable();

class addBook {
    constructor(a, b, c) {
        this.bookName = a;
        this.authore = b;
        this.type = c;
    }
}

class Display {
    Clear() {
        let formData = document.getElementById('form');
        formData.reset();
    }

    Validate() {
        if (Book.bookName.length <= 2 || Book.authore.length <= 2) {
            return false
        } else {
            return true
        }
    }

    Show(type, message) {
        let Message = document.getElementById('message');
        Message.innerHTML = `<h2>${type}---> ${message}</h2>`;
        setTimeout(function() {
            Message.innerHTML = ''
        }, 2000)
    }
}

function ShowTable() {
    let addTableBody = document.getElementById('tablebody')
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes);
    }
    let strings = '';
    noteObj.forEach(function(element, index) {
        strings += `<tr class="tr able">
                    <td class="td1 th">${index + 1}</td>
                    <td class="td2 th">${element.bookName}</td>
                    <td class="td3 th">${element.authore}</td>
                    <td class="td4 th">${element.type}</td>
                    <td class="td5 th"><button style="font-size:30px;" id="${index}" onclick=" deletenote(this.id)" class="btn">⨉</button></td>
                    </tr>   `
    });
    addTableBody.innerHTML = strings
}

function deletenote(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteobj = [];
    } else {
        noteobj = JSON.parse(notes);
    }
    noteobj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(noteobj));
    ShowTable();
}

let formData = document.getElementById('form');
formData.addEventListener('submit', formSubmit);

function formSubmit(e) {
    e.preventDefault();
    let btn = document.getElementById('addbtn')
    btn.style.background = 'green';
    let BookName = document.getElementById('addBook').value;
    let Authore = document.getElementById('addAuthre').value;
    let Type;
    let Java = document.getElementById('Java');
    let Python = document.getElementById('Pyhton');
    let Program = document.getElementById('Program');
    if (Java.checked) {
        Type = Java.value;
    } else if (Python.checked) {
        Type = Python.value;
    } else if (Program.checked) {
        Type = Program.value;
    }

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes);
    }
    Book = new addBook(BookName, Authore, Type);
    display = new Display();
    if (display.Validate()) {
        let obj = {
            bookName: BookName,
            authore: Authore,
            type: Type
        }
        noteObj.push(obj);
        localStorage.setItem('notes', JSON.stringify(noteObj));
        display.Clear();
        display.Show('successfull', "your book submited");
        ShowTable();
    } else {
        display.Show('unsuccessfull', "your book submited");
    }
    setInterval(function() {
        btn.style.background = 'blue';
    }, 500);
}
let search = document.getElementById('search');
let search_bt = document.getElementById('search_bt');
search.addEventListener('input', function() {
    let inputVal = search.value;
    let table = document.getElementsByClassName('able');
    console.log(table)
    search_bt.addEventListener('click', function() {

        Array.from(table).forEach(function(element) {
            // element in chlidnode of div not var. element of div
            let book = element.getElementsByTagName("td")[1].innerText;
            // let book = element.querySelector("td").innerText;
            console.log(book)
            if (book.includes(inputVal)) {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        })

    })
})