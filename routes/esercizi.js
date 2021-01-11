const express = require('express');
const router = express.Router();
const Exercises = require('../models/Exercises');

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
});
module.exports = router;

