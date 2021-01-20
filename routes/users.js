const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



router.post('/registrazione', async (req, res) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }
        const user = new User({
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
            .then(user => {
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

router.get('/get', async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
        console.log(user);
    } catch (err) {
        console.log(res.body);
        res.json({ message: err });

    }

});

router.post('/postend', async (req, res) => {
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
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    }
    catch (err) {
        res.json({ message: err });
    }
});


router.post('/login', function (req, res) {
    var username_found = req.body.username;
    var password_found = req.body.password;
    //console.log(bcrypt.hash(password));
    User.findOne({ $or: [{ username: username_found }, { password: password_found }] })
        .then(user => {
            if (user) {
                bcrypt.compare(password_found, user.password, function(err, result){
                    if(err){
                        res.json({
                            error:err,
                            message:"nt rall compa"
                        })
                    } 
                    if(result){
                        res.json({
                            message:"mo t rall compa"

                        })

                    }else{
                        res.json({
                            message:"Le password compa"

                        })

                    }

                })
            }else{
                res.json({
                    message:"l'utente compa"

                })

            }
        }

        )
});
module.exports = router;