const express = require('express');
const router = express.Router();
const Sheet = require('../models/Sheet');


router.post('/create_sheet', async (req, res) => {
    const sheet = new Sheet({
        exercises: req.body.exercises,
        days: req.body.days,
        reps: req.body.reps,
        series: req.body.series,
        name_sheet: req.body.name_sheet,
        user_id: req.body.user_id
    })

    Sheet.find({ name_sheet: req.body.name_sheet }).count(function (err, number) {
        if (number > 0) {
            res.json({
                error: true
            })
        } else {
            sheet.save()
                .then(sheet => {
                    res.json({
                        sheet,
                        error: false

                    })
                })

        }
    })

});

router.get('/get_sheets', async (req, res) => {

    var user_to_compare = req.query.user_id;

    Sheet.find({ user_id: user_to_compare }).then(sheet => {
        if (sheet.length > 0) {
            res.json({
                sheet
            })


        } else {
            res.json({
                message: "l'utente non ha inserito schede",
                error: "true"
            })
        }

    });


    /* .then(sheet => function (err, result) {
        if (err) {
            res.json({
                message: "non hai nessuna scheda"
            })

        } else if (result) {

            res.json({
                sheet
            })
        }
    }) */

});

module.exports = router;
