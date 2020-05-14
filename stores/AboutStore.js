import { observable } from 'mobx'


class AboutStore {
    @observable count = 0
    
    increment = function() {
        this.count++
    }
    decrement = function() {
        this.count--
    }
}

export default AboutStore