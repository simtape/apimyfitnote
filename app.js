require('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/users');
const alimentRoute = require('./routes/aliments');
const exerciseRoute = require('./routes/esercizi_2');
const bodyParser = require('body-parser');
const Alimento = require('./models/Alimento');

app.use(bodyParser.json());

app.use('/users', userRoute);
app.use('/aliments', alimentRoute);
app.use('/esercizi_2', exerciseRoute);




mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, async () => {
    console.log('connected to db!')

});

 app.listen(process.env.PORT || 3000); 
//app.listen(5000);
