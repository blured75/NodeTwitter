const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const https = require('https')
const options = {
  hostname: 'api.twitter.com',
  port: 443,
  path: '/1.1/search/tweets.json?q=tamere',
  method: 'GET',
  headers: {
    'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAFRL%2BgAAAAAAwIv%2BZM1%2Bmw%2Fq7iPdP5%2F6SwFncuU%3Dv9K8QFoNBsklHRlmZvhuLvdql4vzt4rworhoPcFUFiLWKD6xsL'
  }
}

/*const req = https.request(options, (res) => {
  res.on('data', (d) => {
    process.stdout.write(d)
  })
})

req.on('error', (error) => {
  console.error(error)
})
req.end()
*/
// const res = await fetch('https://api.tvmaze.com/search/shows?q=dejan')
// const data = await res.json()


app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/p/:id', (req, res) => {
        const actualPage = '/post'
        const queryParams = { id: req.params.id } // Get the value of :id
        app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(process.env.PORT || 3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })

  // 1. B64 encode key:pass
  // ek03ejFJaDB3c1pzd21CNkw0djVzcVhLTzpVd2VQWm9ialRpMkw4RVVRYmhFVU1tVTVQdXRaUXNBRUxLNDlSMEtZbEhObFRrRDI1bA==
  // 
  // 2.
  // curl -X POST -H "Authorization:Basic ek03ejFJaDB3c1pzd21CNkw0djVzcVhLTzpVd2VQWm9ialRpMkw4RVVRYmhFVU1tVTVQdXRaUXNBRUxLNDlSMEtZbEhObFRrRDI1bA==" 
  // -H "Content-Type: application/x-www-form-urlencoded;charset=UTF-8" -d "grant_type=client_credentials" https://api.twitter.com/oauth2/token
  // --> {"token_type":"bearer","access_token":"AAAAAAAAAAAAAAAAAAAAAFRL%2BgAAAAAAwIv%2BZM1%2Bmw%2Fq7iPdP5%2F6SwFncuU%3Dv9K8QFoNBsklHRlmZvhuLvdql4vzt4rworhoPcFUFiLWKD6xsL"}
  //
  // 3. 