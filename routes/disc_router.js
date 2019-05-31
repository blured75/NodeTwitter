const express = require('express')
const Disc = require('../models/disc_model')
const disc_router = express.Router()



disc_router.route('/')
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

disc_router.use('/:discId', (req, res, next)=>{
    Disc.findById( req.params.discId, (err,disc)=>{
        if(err)
            res.status(500).send(err)
        else {
            req.disc = disc;
            next()
        }
    })
})

disc_router.route('/:discId')
    .get((req,res) => {
        res.json(req.disc)
    })
    .put((req,res) => {
        req.disc.title_album = req.body.title_album
        req.disc.composers = req.body.composers
        req.disc.year = req.body.year
        req.disc.save()
        res.json(req.disc)
    })
    .patch((req,res)=>{        
        if(req.body._id){
            // Ignore the try of change for _id
            delete req.body._id;
        }
        for( let b in req.body ){
            req.disc[b] = req.body[b]
        }
        req.disc.save();
        res.json(req.disc)
    })
    .delete((req, res) => {
        req.disc.remove(err => {
            if(err){
                res.status(500).send(err)
            }
            else{
                res.status(204).send('removed')
            }
        })        
    })



exports = module.exports = disc_router
