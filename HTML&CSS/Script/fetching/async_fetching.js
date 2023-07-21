console.log('avinash ka fetching');
async function asyncFetching() {
    let response = await fetch('projects/menu.htm');
    let userData=await response.json();
    return userData
}
let a=asyncFetching();
a.then(function (data) {
    console.log(data)
})