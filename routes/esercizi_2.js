const express = require('express');
const router = express.Router();
const Esercizio = require('../models/Esercizio');
const fs = require('fs');
let rawdata = fs.readFileSync('scrape copy.json');
var exercises = JSON.parse(rawdata);

router.get('/get', async(req, res)=>{
    try{
        const exercises = await Exercises.find();
        res.json(exercises);
        console.log(exercises);
    }catch(err)
    {
        console.log(res.body);
        res.json({message:err});

    }

});


router.post('/inserisci_esercizi', async(res, req)=>{
    console.log(exercises.length);

        try{   
            console.log(exercises); 
          const esercizi = await Esercizio.insertMany(exercises);

        }   
        catch(err){ 
            
    }
})



module.exports = router;