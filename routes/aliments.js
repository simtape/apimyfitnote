const express = require('express');
const router = express.Router();
const Alimento = require('../models/Alimento');
const fs = require('fs');
let rawdata = fs.readFileSync('scrape copy.json');
var aliments = JSON.parse(rawdata);


router.post('/inserisci_alimenti', async(res, req)=>{
    console.log(aliments.length);

        try{   
          
          const alimentoSalvato = await Alimento.insertMany(aliments);
            res.json(alimentoSalvato);
        }   
        catch(err){ 
            res.json({message: err});
    }

    
    

});

router.post('/inserisci_esercizi', async(res, req)=>{


        try{   

          const esercizi = await Esercizio.insertMany(exercises);

        }   
        catch(err){ 
            console.log(err);
    }

    
    

})







module.exports = router;