const express = require('express');
const router = express.Router();
const Alimento = require('../models/Alimento');
const fs = require('fs');
let rawdata = fs.readFileSync('scrape.json');
var aliments = JSON.parse(rawdata);


router.post('/inserisci_alimenti', async(res, req)=>{
    console.log(aliments.length);

        try{   
          
          const alimentoSalvato = await Alimento.insertMany(aliments);
           
        }   
        catch(err){ 
            res.json({message: err});
    }


    
  
});

router.get('/get_aliments', async(req, res)=>{
  try{
      const aliments = await Alimento.find();
      res.json(aliments);
      console.log(aliments);
  }catch(err)
  {
      console.log(res.body);
      res.json({message:err});

  }

});










module.exports = router;