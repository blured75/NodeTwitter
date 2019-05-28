const express = require('express')
const disc_router = express.Router();

disc_router
    .get('/', (req,res) => {
        res.json([
            {
                id: 1,
                album_title: "Machine Head",
                composers: "Deep Purple",
                creation_year: "1971"
            },
            {
                id: 2,
                album_title: "Another brick in the wall",
                composers: "Pink Floyd",
                creation_year: "1979"
            }
        ])
    })
    .get('/2', (req,res) => {
        res.json({
            id: 2,
            album_title: "Another brick in the wall",
            composers: "Pink Floyd",
            creation_year: "1979"
          })
    })

//exports.disc_router = disc_router


exports = module.exports = disc_router;