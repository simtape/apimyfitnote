const express = require('express');
const router = express.Router();
const Exercises = require('../models/Esercizio');
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
    try{    
        const savedExercises = await Exercises.insertMany(exercises);
        //res.json(savedExercises);
        
    }   
    catch(err){ 
        //res.json({message: err});
    }

});

module.exports = router;



