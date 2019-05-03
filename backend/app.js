// app.js

const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');

const users = require('./routes/user');
const postroutes = require('./routes/postRoute');

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(passport.initialize());
app.use(cors());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);

app.use('/api/posts', postroutes);

app.get('/', function(req, res) {
    res.send('hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});