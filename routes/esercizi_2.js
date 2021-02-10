const express = require('express');
const router = express.Router();
const Esercizio = require('../models/Esercizio');
const fs = require('fs');
let rawdata = fs.readFileSync('scrape copy.json');
var exercises = JSON.parse(rawdata);

router.get('/get', async(req, res)=>{
    try{
        const exercises = await Esercizio.find();
        res.json({exercises});
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


router.get('/search_exercises', async(req, res)=>{
    try{
        var nome_to_compare = req.query.ricerca;
        const exercises = await Esercizio.find(
          {
            $text: {$search:nome_to_compare}

    })
    console.log(exercises);
    res.json(exercises);
    }catch(err)
    {
        console.log(res.body);
      res.json({message:err});
    }
});


router.get('/search_attrezzi', async(req, res)=>{
    try{
        var nome_to_compare = req.query.ricerca;
        const exercises = await Esercizio.find(
          {
            $text: {$search:nome_to_compare}

    })
    console.log(exercises);
    res.json(exercises);
    }catch(err)
    {
        console.log(res.body);
      res.json({message:err});
    }
});


module.exports = router;