console.log('fetching this video are done ')

// for get request
function fetchingFunction() {
    // url= website link
    url = 'menu.html'
    fetch(url).then(
        function(response) {
            // return response.json
            console.log(response.text)
            return response.text
        }).then(
        function(data) {
            console.log(data)
        })
}
fetchingFunction()
    // console.log(data)

// for post request
// function fetchingFunction(){
//     // url= website link
//     url = './projects/menu.htm'
//     // postData=forment of damidata
//     postHeader={
//         method:'post',
//         header:{
//             'Content-Type':'application/.json'
//         }
//         body=postData
//     }
//     fetch(url,postHeader).then(
//         function (response) {
//             // return response.json
//             return response.text
//         }).then(
//             function (data) {
//                 console.log(data)
//             })
// }
// fetchingFunction()
// console.log(data)