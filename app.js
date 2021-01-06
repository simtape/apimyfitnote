const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postRoute = require('./routes/posts');
const userRoute = require('./routes/users');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

require('dotenv/config');

app.use('/posts',postRoute );
app.use('/users', userRoute);

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, ()=>
                console.log('connected to db!')
                );

app.listen(PORT);