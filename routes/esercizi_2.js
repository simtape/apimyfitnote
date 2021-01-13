const express = require('express');
const router = express.Router();
const Esercizio = require('../models/Esercizio');
const fs = require('fs');
let rawdata = fs.readFileSync('scrape copy.json');
var exercises = JSON.parse(rawdata);


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