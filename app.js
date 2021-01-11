require('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postRoute = require('./routes/posts');
const userRoute = require('./routes/users');
const alimentRoute = require('./routes/aliments');
const bodyParser = require('body-parser');
const Alimento = require('./models/Alimento');

app.use(bodyParser.json());
app.use('/posts', postRoute);
app.use('/users', userRoute);
app.use('/aliments', alimentRoute);




mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, async () => {
    console.log('connected to db!')

});

 app.listen(process.env.PORT || 3000); 
//app.listen(5000);
