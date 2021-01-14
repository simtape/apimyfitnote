const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



router.post('/registrazione',async(req, res) =>{
bcrypt.hash(req.body.password, 10, function(err, hashedPass){
    if(err) {
        res.json({
            error: err
        })
    }
        const user = new User ({
            name: req.body.name,
            surname: req.body.surname,
            username: req.body.username,
            height: req.body.height,
            weight: req.body.weight,
            mail: req.body.mail,
            age: req.body.age,
            password: hashedPass,
            sheet: req.body.sheet
        })
        user.save()
        .then(user =>{
            res.json({
                message: 'Utente registrato con successo!'
            })
        })
        .catch(error => {
            res.json({
                message: 'errore!'
            })
        })
    
}) 
});

router.get('/get', async(req, res)=>{
    try{
        const user = await User.find();
        res.json(user);
        console.log(user);
    }catch(err)
    {
        console.log(res.body);
        res.json({message:err});

    }

});

router.post('/postend',async (req, res)=>{
    const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        height: req.body.height,
        weight: req.body.weight,
        mail: req.body.mail,
        age: req.body.age,
        password: req.body.password,
        sheet: req.body.sheet
    });
    try{    
        const savedUser = await user.save();
        res.json(savedUser);
    }   
    catch(err){ 
        res.json({message: err});
}
});


router.post('/login', function(req, res){
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username, password: password}, function(err, user){
        if(err){
            console.log(err);
            return res.status(500).send();
        }
        if(!user) {
            return res.status(404).send();//non esiste
        }
        return res.status(200).send();//esiste 
    })
});
module.exports = router;