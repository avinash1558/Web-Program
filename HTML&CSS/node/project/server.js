const express = require('express');
const path = require('path')
// const fs=require('fs');
const body=require('body-parser')
const app = express();
// mongoose
const mongo = require('mongoose');
// connet to mongodb
mongo.connect('mongodb://localhost/FEEDBACK', { useNewUrlParser: true});
// schema include
var sub_avinash = new mongo.Schema({
    Name: String,
    Email: String,
    Feedback: String,
    More: String
});
// close sub_avinash
// create database and include mudel
var feedback = mongo.model('feedback', sub_avinash);
// it is for getting data of form
app.use(express.urlencoded());
// static 
app.use('/static', express.static('static'));
// pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'all'));

app.get('/', (req, res) => {
    res.status(200).render('project1.pug');
});
app.get('/project', (req, res) => {
    res.status(200).render('project.pug');
});
// app.post('/',(req,res)=>{
// console.log(req.body);
// f1=req.body.Name
// f2=req.body.Email
// f3=req.body.Feedback
// f4=req.body.More
// s=`${f1},${f2} ,${f3}  ,${f4}`
// fs.writeFileSync("doc.txt",s)
// res.status(200).render('project1.pug');
// });
app.post('/', (req, res) => {
    console.log(req.body);
    var data = new feedback(req.body);
    data.save().then(() => {
        res.send("it is save")
    }).catch(() => {
        res.status(200).send('it is not save');
    })
});
const part = 80;
app.listen(part, () => {
    console.log(`the server is ${part}`);
});