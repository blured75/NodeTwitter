const express = require('express')
const Disc = require('../models/disc_model')
const discs_router = express.Router()

discs_router.route('/')
    .get((req,res) => {
        Disc.find({}, (err, discs) => {
            res.json(discs)
        }) 
    })
    .post((req, res) => {
        let disc = new Disc(req.body);
        disc.save();
        res.status(201).send(disc) 
    })
    .delete((req, res) => {
        Disc.remove({})   
        res.status(201).send({msg:"Tout est effacé ! bravo patron !"}) 
    })


exports = module.exports = discs_router
