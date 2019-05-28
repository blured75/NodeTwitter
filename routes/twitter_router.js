const express = require('express')
const twitter_router = express.Router();

const TWITTER_KEY = process.env.TWITTER_KEY

twitter_router
    .get('/tweets/:searched', (req,res) => {
        console.log(`[server.js] API Tweets" ${req.url}`)
        let searched = req.params.searched
        // Encode searched cause we are calling through http
        searched = encodeURIComponent(searched)

        res2 = fetch(`https://api.twitter.com/1.1/search/tweets.json?q=${searched}&result_type=recent&count=300&tweet_mode=extended`, {
            headers: {
                'Authorization': TWITTER_KEY
            }
        })
        .then( r => r.json() )
        .then( data => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
        })
    })
    .get('/timeline/:username', (req, res) => {
        console.log(`[server.js] API Timeline" ${req.url}`)
        console.log(`req.params ${JSON.stringify(req.params)}`)
    
        res2 = fetch(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${req.params.username}`, {
          headers: {
            'Authorization': TWITTER_KEY
          }
        })
        .then( r => r.json() )
        .then( data => {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(data));
        })
    })

exports = module.exports = twitter_router