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

/* app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});  */
app.listen(PORT); 