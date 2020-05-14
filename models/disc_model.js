const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const disc_model = new Schema({
    title_album: { type: String },
    composers: { type: String },
    year: { type: String }
})

exports = module.exports = mongoose.model('discs', disc_model)