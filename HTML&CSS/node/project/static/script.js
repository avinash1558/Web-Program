function show(){
let menu =document.getElementById('li')
let section=document.getElementById('sec4');
if(section.style.display !='block'){
    section.style.display='block';
    menu.style.display='block'
}
else{
    section.style.display='none';
    menu.style.display='none'
}
}