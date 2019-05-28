// We cannot use import there
const disc_router = require('./routes/disc_router') 
const twitter_router = require('./routes/twitter_router')

var fetch = require("isomorphic-unfetch")

const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    
    server.use('/external/api', twitter_router)
    server.use('/api/discs', disc_router)

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ APPLICATION ENTRY POINTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Link to display the timeline of a user
    // Execute the render of /post using req.params.id from url
    server.get('/p/:id', (req, res) => {
        const actualPage = '/post'
        const queryParams = { id: req.params.id } // Get the value of :id
        app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    let port = process.env.PORT || 3000
    

    server.listen(port, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })


function prepareAPIDiscsEntryPoints(server) {
  server.get('/api/discs', (req, res) => {
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
  server.get('/api/discs/2', (req,res)=>{
      res.json(
              {
                id: 2,
                album_title: "Another brick in the wall",
                composers: "Pink Floyd",
                creation_year: "1979"
              }
          )
  })
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ API ENTRY POINT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function prepareAPIEntryPoints(server) {
  server.get("/external/api/tweets/:searched", (req, res) => {
    console.log(`[server.js] API Tweets" ${req.url}`)
    let searched = req.params.searched
    // Encode searched cause we are calling through http
    searched = encodeURIComponent(searched)
    //console.log(`searched : ${searched}`)

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
  });

  server.get("/external/api/timeline/:username", (req, res) => {
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
  });
}