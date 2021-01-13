const express = require('express');
const router = express.Router();
const Exercises = require('../models/Esercizio');
const fs = require('fs');
let rawdata = fs.readFileSync('scrape copy.json');
var exercises = JSON.parse(rawdata);


router.post('/inserisci_esercizi', async(res, req)=>{
    console.log(exercises.length);

    try{    
        //const savedExercises = await Exercises.insertMany(exercises);
        //res.json(savedExercises);
        console,log(exercises);
    }   
    catch(err){ 
        //res.json({message: err});
    }

})
module.exports = router;
/* router.get('/get', async(req, res)=>{
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

router.post('/postend',async (req, res)=>{
    const exercises = new Exercises({
        name_exercises: req.body.name_exercises,
        tutorial: req.body.tutorial
    
    });
    try{    
        const savedExercises = await exercises.save();
        res.json(savedExercises);
    }   
    catch(err){ 
        res.json({message: err});
}
}); */



