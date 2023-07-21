// const ex = require('express');
// const app = ex();
// app.get("/", (req, res) => {
//     res.send("it is avinash 1st file");
// });
// app.get("/1st", (req, res) => {
//     res.status(200).send("it is avinash 2nd file");
// });
// app.post("/1st", (req, res) => {
//     res.send("it is avinash post 2nd file");
// });
// app.post("/2st", (req, res) => {
//     res.status(404).send("error");
// });
// const p = 80;
// app.listen(p, () => {
//     console.log(`${p}`);
// });

// const ex = require('express');
// const path= require('path');
// const app = ex();
// // enter in browser
// // app.use('/sta', ex.static('folder'));
// //folder create--  file .html
//                 // file .js
// // http://localhost/sta/file.js
// app.use('/static', ex.static('static'));

// //set view engine to pug
// app.set('view engine','pug');

// // join with views to pug folder
// app.set('views',path.join(__dirname,'1pug'));

// //end point of pug
// app.get("/1stpug", (req, res) => {
//     res.render('1stpug',{title:"1st site create",mass:'1st site create with pug'});
// });

// app.get("/", (req, res) => {
//     res.send("it is avinash 1st file");
// });
// app.get("/1st", (req, res) => {
//     res.status(200).send("it is avinash 2nd file");
// });
// app.post("/1st", (req, res) => {
//     res.send("it is avinash post 2nd file");
// });
// app.get("/2st", (req, res) => {
//     res.status(404).send("error");
// });
// const p = 80;
// app.listen(p, () => {
//     console.log(`${p}`);
// });
