class Twitter {
  static async getTimeline(id) {

    let hostname = getHostname()
    let res = await fetch(`http://${hostname}:3000/external/api/timeline/${id}`)
    let timeline = await res.json()

    return timeline
  }

  static getHostname() {
    // If this api is called from the browser use the current server name
    // Else it means it is called by the node server in that case use the server name available in process
    let hostname
  
    if (typeof window === "undefined") {
      if (hostname === undefined) {
          let os = require('os');
          console.log(`os.hostname() ${os.hostname()}`)
          hostname = os.hostname()
      }
    }
    else {
      hostname = window.location.hostname
    }
    return hostname
  }
}


export default Twitter