console.log('avinash ki library hai')
class addBook {
    constructor(a, b, c) {
        this.bookName = a;
        this.authore = b;
        this.type = c;
    }
}
class Display {
    Add(b) {
        let addTableBody = document.getElementById('tablebody')
        let strings = `<tr class="tr">
                       <th class="th Th">1</th>
                       <th class="th">${Book.bookName}</th>
                       <th class="th">${Book.authore}</th>
                       <th class="th">${Book.type}</th>
                       </tr>`
        addTableBody.innerHTML += strings
    }
    Clear() {
        let formData = document.getElementById('form');
        formData.reset();
    }
    Validate() {
        if (Book.bookName.length <= 2 || Book.authore.length  <= 2) {
            return false
        }
        else {
            return true
        }
    }
    Show(type, message) {
        let Message = document.getElementById('message');
        Message.innerHTML = `<h2>${type}---> ${message}`;
        setTimeout(function () {
            Message.innerHTML = ''
        }, 2000)
    }
}

let formData = document.getElementById('form');
formData.addEventListener('submit', formSubmit);
function formSubmit(e) {
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
    }
    else if (Python.checked) {
        Type = Python.value;
    }
    else if (Program.checked) {
        Type = Program.value;
    }
    Book = new addBook(BookName, Authore, Type);
    display = new Display();
    if (display.Validate(Book)) {
        display.Add(Book);
        display.Clear();
        display.Show('successfull', "your book submited");
    }
    else {
        display.Show('unsuccessfull', "your book submited");
    }
    setInterval(() => {
        btn.style.background = 'blue';
    }, 500);
    e.preventDefault();
}
