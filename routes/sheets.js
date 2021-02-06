const express = require('express');
const router = express.Router();
const Sheet = require('../models/Sheet');


router.post('/create_sheet', async (req, res) => {
    const sheet = new Sheet({
        exercises: req.body.exercises,
        days: req.body.days,
        reps: req.body.reps,
        series: req.body.series,
        user_id: req.body.user_id
    })

    sheet.save().then(sheet => {
        res.json({
            sheet
        })
    })
});

router.post('/get_sheets', async (req, res) => {
    Sheet.find({ user_id: req.body.user_id }).then(sheet => function (err, result) {
        if (err) {
            res.json({
                message: "non hai nessuna scheda"
            })

        } else if (result) {

            res.json({
                sheet
            })
        }
    })

});

module.exports = router;
