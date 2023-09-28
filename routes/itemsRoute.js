const express = require("express");
const router = express.Router();
const Item = require('../models/itemModel')

router.get("/getallitems",async(req,res)=>{

    try {
        const items = await Item.find({})
        res.send(items)
        
    } catch (error) {
        return res.status(400).json({message: error});
        
    }
    
});

router.post('/createpet', async(req, res)=>{
    console.log(req.body)
    try {
        const item = await Item.create({
            name: req.body.name,
            category: req.body.category,
            prices: req.body.prices,
            varients: req.body.varients,
            description: req.body.description,
            image: req.body.image
        })
        res.json(item)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;


