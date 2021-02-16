const express = require('express');
const { mongo } = require('mongoose');
const router = express.Router();
const Goal = require('../models/Goal');
var objectId = require('mongodb').ObjectID;


router.post('/create_goals', async (req, res) => {

    const goal = new Goal({
        status: req.body.status,
        obiettivo: req.body.obiettivo,
        valore_attuale: req.body.valore_attuale,
        id_user: req.body.id_user
    })
            goal.save().then(goal => {
                res.json({
                    goal
            });
        });});

router.post('/get_goals', async (req, res) => {
     Goal.findOne({ id_user: req.body.id_user }).then(goal=>{

        if (goal) {
            res.json({
                goal
            })
    
        } else {
            res.json({
                message: "l'utente non ha ancora inserito obiettivi"
            })
        }

     })

});

router.post('/update_goals', async (req, res) => {
    const goal = new Goal({
        status: req.body.status,
        obiettivo: req.body.obiettivo,
        valore_attuale: req.body.valore_attuale,
        id_user: req.body.id_user
    }) 
        goal.save().then(goal => {
            res.json({
                goal
            })
        })
});
router.post('/remove_goals', async (req, res) => {
    
    Goal.find({ id_user: req.body.id_user }).count(function (err, number) {
            Goal.remove({ id_user: req.body.id_user }).then(message => [

                res.json({
                    message : "eliminato correttamente"
                })
            ]).catch(error => {

                res.json({
                    error
                })
            });

});
});

module.exports = router;