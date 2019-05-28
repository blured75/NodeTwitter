let hostname
let protocol="http:"
  
if (typeof window === "undefined") {
  if (hostname === undefined) {
      /*let os = require('os');
      console.log(`os.hostame() ${os.hostname()}`)
      hostname = os.hostname()*/

      if (process.env.NODE_ENV == 'production') {
        hostname="mockingbird2.herokuapp.com"
        protocol="https:"
      }
      else {
        protocol="http:"
        hostname="localhost:3000"
      }
  }
}
else {
  hostname = window.location.hostname + ":" +  window.location.port
  protocol = window.location.protocol
}


class Twitter {
  static async getTimeline(id) {
    console.log(`calling url $protocol}//${hostname}/external/api/timeline/${id}`)

    let res = await fetch(`${protocol}//${hostname}/external/api/timeline/${id}`)
    let timeline_from_api = await res.json()

    let timeline = timeline_from_api.map(x => {
      return {profile_image_url: x.user.profile_image_url, description: x.user.description, created_at: x.created_at, text: x.text}
    })

    return {timeline: timeline}
  }

  static async search(searched) {
    
    // URL Encode searched cause it goes through http
    searched = encodeURIComponent(searched)
    // console.log(`searched ${searched}`)
    let res = await fetch(`${protocol}//${hostname}/external/api/tweets/${searched}`)
    let tweets_from_api = await res.json()

    let tweets = tweets_from_api.statuses.map(x => {
      return {screen_name: x.user.screen_name, full_text: x.full_text, user_image: x.user.profile_image_url}
    })

    return {
      tweets: tweets
    }
  }


  static getHostname() {
    // If this api is called from the browser use the current server name
    // Else it means it is called by the node server in that case use the server name available in process
    let hostname
  
    if (typeof window === "undefined") {
      if (hostname === undefined) {
          let os = require('os');
          console.log(`os.hostame() ${os.hostname()}`)
          hostname = os.hostname()

          if (process.env.NODE_ENV == 'production') {
            hostname="mockingbird2.herokuapp.com"
          }
          else {
            hostname="localhost:3000"
          }
      }
    }
    else {
      hostname = window.location.hostname
    }
    return hostname
  }
}


export default Twitter