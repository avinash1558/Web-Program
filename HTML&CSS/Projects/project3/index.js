function Display(ids, cls) {
    let open = document.getElementById(ids);
    let close = document.getElementById(cls);
    if (open != null || close != null) {
        open.addEventListener('click', () => {
            close.style.display = 'block';
            console.log(close.innerText)
        })
        open.addEventListener('dblclick', () => {
            close.style.display = 'none';
        })
    }
    else {
        return 'block'
    }
}
console.log('avinash sharma');
let newsDiv = document.getElementById('newsDiv')
let ajax = new XMLHttpRequest();
ajax.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=a94e1ea58f46410c9d41dd2a54d40663', false);
let b;
ajax.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let article = json.articles;
        let htmlnew = '';
        article.forEach(function (element, index) {
            let news = `<div class="div" id="news1">
            <h2 class="title" id="open${index + 1}">${index + 1}) ${element.title}</h2>
            <p class="content" id="close${index + 1}">${element.content}</p>
            </div>`
            htmlnew += news;
        });
        newsDiv.innerHTML = htmlnew;
        b = 1;
    }
    else {
        console.log('some error are occured');
    }
}
ajax.send();
let i = 0;
let a;
if (b == 1) {
    while (1) {
        a = Display(`open${i + 1}`, `close${i + 1}`);
        if (a == 'block') {
            break;
        }
        i++;
    }
}
