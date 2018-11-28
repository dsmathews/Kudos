const express = require('express');
const mongoose = require('mongoose');
const MONGODB_URI = require("./config/keys");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

const databaseUri = 'mongodb://localhost/kudos';

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
} else {
    mongoose.connect(databaseUri, {useNewUrlParser: true});
}

const db = mongoose.connection;
db.on('error', function (err){
    console.log("Mongoose Error: ", err);
});
db.once('open', function () {
    console.log("Mongoose connection successful.");
});
require('./routes/api-routes')(app);
require('./models/kudos.js');
require('./models/user.js');

app.listen(PORT, function(){
    console.log(`App is listening on port ${PORT}`);
});