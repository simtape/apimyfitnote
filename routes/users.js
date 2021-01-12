const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/get', async(req, res)=>{
    try{
        const user = await User.find();
        res.json(user);
        console.log(user);
    }catch(err)
    {
        console.log(res.body);
        res.json({message:err});

    }

});

router.post('/postend',async (req, res)=>{
    const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        height: req.body.height,
        weight: req.body.weight,
        mail: req.body.mail,
        age: req.body.age,
        password: req.body.password,
        sheet: req.body.sheet
    });
    try{    
        const savedUser = await user.save();
        res.json(savedUser);
    }   
    catch(err){ 
        res.json({message: err});
}
});
module.exports = router;