**NodeTwitter**

The aim of the project is to show a usage of NextJS / ReactJS with Twitter API to make search and display timelines

The generated page will act as a Single Page Application and will be fully Server Side Renderable for search engine
Indeed the content is generated either on the client or on the server
For now the api used is a proxy to twitter JSON api.

The entry point given to the application are defined in server.js with express
/external/api/tweets/:searched -> forward the query to https://api.twitter.com/1.1/search/tweets.json?q=${searched}&result_type=recent&count=300&tweet_mode=extended
/external/api/timeline/:username" -> forward the query to https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${req.params.username}

**Installation**
***Binding to your twitter account***
Modify server.js to put your twitter key instead
const TWITTER_KEY = "......." // (line 11)

If you don't have any twitter key, you need to :
. Create an account on twitter
. Ask for access for dev app platform
. Use your Consumer API key and secret to create a token that you can use in your program

(https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens.html)

https://developer.twitter.com/en/docs/basics/authentication/overview/application-only#issuing-application-only-requests

1. URL encode the consumer key and the consumer secret according to RFC 1738. Note that at the time of writing, this will not actually change the consumer key and secret, but this step should still be performed in case the format of those values changes in the future.

2. Concatenate the encoded consumer key, a colon character ”:”, and the encoded consumer secret into a single string.

3. Base64 encode the string from the previous step 
$ echo -n 'my_consumer_key:my_consumer_secret' | openssl base64 
Or whatever website to do the conversion (www.base64encode.org for example)

***Librairy dependencies***
$ npm install

**Start**
Development mode
$ npm run dev

Production mode
$ NODE_ENV=production server.js

Build
$ npm run build

**TODO**
Use CSS to put lipstick & rimmel on the look