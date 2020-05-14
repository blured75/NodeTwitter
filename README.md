# NodeTwitter

The aim of the project is to show a usage of **NextJS / ReactJS** with **Twitter API** to make search and display timelines  
The generated page will act as a **Single Page Application** and will be fully **Server Side Renderable** for search engine  

Indeed the content is generated either on the client or on the server  
For now the api used is a proxy to twitter JSON api.  
The entry point given to the application are defined in server.js with express  

  * /external/api/tweets/:searched ->  
    https://api.twitter.com/1.1/search/tweets.json?q=${searched}&result_type=recent&count=300&tweet_mode=extended  

  * /external/api/timeline/:username" ->  
    https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${req.params.username}  

<br/><br/>

## Installation
### Binding your twitter account to the application

Modify twitter_router.js to put your twitter key instead or set the env variable TWITTER_KEY with your key for twitter

```
const TWITTER_KEY = "......." // (line 6)
```

If you don't have any twitter key, you need to :
  * Create an account on twitter
  * Ask for access for dev app platform
  * Use your Consumer API key and secret to create a token that you can use in your program
```
https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens.html
https://developer.twitter.com/en/docs/basics/authentication/overview/application-only#issuing-application-only-requests  
```

1. URL encode the consumer key and the consumer secret according to RFC 1738. Note that at the time of writing,   
   this will not actually change the consumer key and secret, but this step should still be performed in case the format of those values changes in the future.  

2. Concatenate the encoded consumer key, a colon character ”:”, and the encoded consumer secret into a single string.

3. Base64 encode the string from the previous step 
```
$ echo -n 'my_consumer_key:my_consumer_secret' | openssl base64 
Or whatever website to do the conversion (www.base64encode.org for example)
```
4. Ask twitter/oauth2 for your token with the base64 string you've generated

Use curl or whatever tool you've got under the hand

```
curl -X POST -H "Authorization:Basic ...............there_your_b64_string............" -H "Content-Type: application/x-www-form-urlencoded;charset=UTF-8" -d "grant_type=client_credentials" https://api.twitter.com/oauth2/token
```

The key to use should contain "Bearer" followed by the generated string from curl result
```
Bearer .....................
```
<br/><br/>

### Install the librairies dependencies
```
$ npm install
```
<br/><br/>
## Start
Development mode  
```
$ npm run dev
```

Production mode
```
$ NODE_ENV=production server.js
```

Build
```
$ npm run build
```
<br/><br/>
## TODO
Use CSS to put lipstick & rimmel on the look

<br/><br/>
## Cerise sur le gateau
Access to a CRUD api for disc managements

### Installation of the dependencies ###
1. Create an account and a server on mongodb atlas https://cloud.mongodb.com/, it's free for 500 MB usage & very simple (or use any mongodb server)
2. Fill the environment variable : DB_USER, DB_PASSWORD, DB_SERVER with the user / password who make connexion to the database and the server name to use

Model :
```
{
  id: ...
  title_album: ...
  composers: ...
  year: ...
}
```

**Create :**
***POST /api/discs***

Body
```
{
  title_album: ...
  composers: ...
  year: ...
}
```

return the json with generated id

**Fetch :**
***All the discs available -> GET /api/discs***

return
```
[
  {
     title_album: ...,
      composers: ...,
      year: ...
  },
  {
     title_album: ...,
      composers: ...,
      year: ...
  },
  ...
]
```

***One disc via _id -> GET /api/disc/:id***

return 
```
{
    title_album: ...,
    composers: ...,
    year: ...
}
```

**Update :**
***One fully disc set -> PUT /api/disc/:id***

Body
```
    {
        "title_album": "machine head",
        "composers": "deep purple",
        "year": "2010"
    }
```

return
```
{
    "_id": "...",
    "title_album": "machine head",
    "composers": "deep purple",
    "year": "2010",
    "__v": 0
}
```

***Some properties of a disc -> PATCH /api/disc/:id***
Body
```
    {
        "composers": "deep purple",
        "year": "1971"
    }
```

return 
```
  {
    "_id": "5cf10ec4b73c165329d0b3dc",
    "title_album": "machine head",
    "composers": "deep purple",
    "year": "1971",
    "__v": 0
  }
```

**Delete :**
***a disc -> DELETE /api/disc/:id***
***All the discs -> DELETE /api/discs***


