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
    Goal.updateOne({id_user: req.body.id_user}, {$push:{name: goal.name}})


});

/* router.post('/get_goals', async (req, res) => {



});


router.post('/update_goals', async (req, res) => {



}); */


module.exports = router;