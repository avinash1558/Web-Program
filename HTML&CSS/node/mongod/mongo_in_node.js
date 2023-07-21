// mongoose
const mongo = require('mongoose');

// connet to mongodb
mongo.connect('mongodb://localhost/avinash', { useNewUrlParser: true, useUnifiedTopology: true });

// check are connected
var db = mongo.connection;

// not connected then
db.on('error', console.error.bind(console, 'connection error'));

// are connected then
db.once('open', function () {
    console.log('i am connected to mongodb');
});

// schema include
var sub_avinash = new mongo.Schema({ name: String });

// methods of schema
sub_avinash.methods.speak = function () {
    var told = "my name is " + this.name;
    console.log(told);
}

// close sub_avinash
// create database and include mudel
var kitten = mongo.model('avinashkitty', sub_avinash);

// create new
var avinashkitty = new kitten({ name: 'avinashkitty' });
console.log(avinashkitty.name);
avinashkitty.speak();

// save in mongodb
avinashkitty.save(function (err, avinashkitty) {
    if (err) return console.error(err);
    avinashkitty.speak();
});

// find
kitten.find({ name: 'avinashkitty' }, function (err, kitten) {
    if (err) return console.error(err);
    console.log(kitten);
});
