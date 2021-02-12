const express = require('express');
const router = express.Router();
const Goal = require('../models/Goal');



router.post('/create_goals', async (req, res) => {


    const goal = new Goal({
        name: req.body.name,
        obiettivo: req.body.obiettivo,
        valore_attuale: req.body.valore_attuale,
        id_user: req.body.id_user
    })
    var name_to_append = req.body.name;
    var id = req.body.id_user

    Goal.find({ id_user: req.body.id_user }).count(function (err, number) {
        if (number == 0) {
            goal.save().then(goal => {
                res.json({
                    goal
                })

            });

        } else {
            /*       res.json({
                      message:"obiettivo gia creato"
                  }); */

            Goal.remove({ id_user: req.body.id_user }).then(message => [

                res.json({
                    message
                })
            ]).catch(error => {

                res.json({
                    error
                })
            })
            res.json({
                message: "obiettivo gia creato"
            });

            goal.save().then(goal => {
                res.json({
                    goal
                })

            })



        }


    })
    /*     goal.save().then(goal => {
            res.json({
                goal
            })
    
    
        }); */
});

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
/*

router.post('/update_goals', async (req, res) => {



}); */

module.exports = router;