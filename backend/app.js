// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const config = require('./db');
const users = require('./routes/user');
const postroutes = require('./routes/postRoute');

const app = express();
let server = require('http').Server(app);
const io = require('socket.io').listen(server);
const PORT = process.env.PORT || 5000;

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

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

server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

io.on('connection', (socket) => {
    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});