// We cannot use import there
const disc_router = require('./routes/disc_router') 
const discs_router = require('./routes/discs_router') 
const twitter_router = require('./routes/twitter_router')
const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const JSON2 = require('./utils/JSON2.js')

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_SERVER = process.env.DB_SERVER


const db = mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_SERVER}/test?retryWrites=true&w=majority`, {useNewUrlParser: true}, error => {
  // Πολη ομορφη error handler, für die grosses feignasses
  console.log(error)
});

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.use('/external/api', twitter_router)
    server.use('/api/disc', disc_router) // Operation on one disc
    server.use('/api/discs', discs_router) // Operations on multiple discs

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ APPLICATION ENTRY POINTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Link to display the timeline of a user
    // Execute the render of /post using req.params.id from url
    server.get('/p/:id', (req, res) => {
        console.log(`recieved /p/:id ${JSON2.pretty(JSON2.stringify(req))}`)

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