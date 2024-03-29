const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { rawListeners } = require('../models/User');



router.post('/registrazione', async (req, res) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }

        var username_to_compare = req.body.username;
        var mail_to_compare = req.body.mail;
        const user = new User({
            name: req.body.name,
            surname: req.body.surname,
            height: req.body.height,
            weight: req.body.weight,
            mail: req.body.mail,
            date: req.body.date,
            password: hashedPass
        })
        user.save()
            .then(user => {
                res.json({
                    user


                })
            })
            .catch(error => {

                const foundUser = User.find({ mail: mail_to_compare }).count(function (err, number) {
                    if (number != 0) {

                        res.json({
                            message: ' mail già esistente'
                        })
                    }


                });
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


router.post('/login', function (req, res) {
    var mail_inserita = req.body.mail;
    var password_inserita = req.body.password;
    //console.log(bcrypt.hash(password));
    User.findOne({ mail: mail_inserita })
        .then(user => {
            if (user) {
                bcrypt.compare(password_inserita, user.password, function (err, result) {
                    if (err) {
                        res.json({
                            error: err,
                            message: "Errore"
                        })
                    }

                    if (result) {

                        //message:"Login effettuato con successo",
                        res.json({

                            user

                        })

                    } else {
                        res.json({
                            message: "Password sbagliata"

                        })

                    }

                })
            } else {
                res.json({
                    message: "Utente sbagliato"

                })

            }
        }
        )

});

router.post('/update_user', async (req, res) => {
    User.updateOne({ mail: req.body.mail }, {
        name: req.body.name,
        surname: req.body.surname,
        weight: req.body.weight,
        height: req.body.height,
        date: req.body.date

    }).then(result => {
        res.json({ error: false })
    }).catch(error => {
        res.json({ error: true })
    })
}
);

router.post('/find_mail', async(req, res)=>{
    User.find({ mail: req.body.mail}).count(function (err, number) {
        if (number>0) {

            res.json({
                error: true
            })
        }else{
            res.json({
                error: false
            })

        }


    });



});


module.exports = router;