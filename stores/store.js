import { action, observable } from 'mobx'
import { useStaticRendering } from 'mobx-react'

const isServer = !process.browser
useStaticRendering(isServer)

class Store {
  @observable lastUpdate = 0
  @observable light = false

  constructor(isServer, initialData = {}) {
    this.lastUpdate = initialData.lastUpdate != null ? initialData.lastUpdate : Date.now()
    this.light = !!initialData.light

    //this.count = initialData.count != null ? initialData.count : 0
  }

  @action start = () => {
    this.timer = setInterval(() => {
      this.lastUpdate = Date.now()
      this.light = true
    }, 5)
  }

  stop = () => clearInterval(this.timer)

  // ~~~~~~~~~~~ start of real mobx usage 
  @observable count = 0
  
  increment = () => {
    this.count++
  }
  decrement = () => {
    this.count--
  }
}

let store = null

export function initializeStore(initialData) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(isServer, initialData)
  }
  if (store === null) {
    store = new Store(isServer, initialData)
  }
  return store
}