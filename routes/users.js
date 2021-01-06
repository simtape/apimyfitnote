const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res)=>{
    res.send('We are on user');

});

router.post('/', (req, res)=>{
    const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        height: req.body.height,
        weight: req.body.weight,
        mail: req.body.mail,
        age: req.body.age,
        password: req.body.password
    });

    user.save()
    .then(data=>{
        res.json(data);

    })
    .catch(err=>{
        res.json({message: err});

    })
});
module.exports = router;