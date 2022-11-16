const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: Number
  },
  currency: {
    required: true,
    type: String
  },
  site: {
    required: true,
    type: String
  },
  url: {
    required: true,
    type: String
  },
  date_posted: {
    required: true,
    type: Date
  },
  date_recorded: {
    type: Date,
    default: Date.now
  },
  date_updated: {
    type: Date,
    default: Date.now
  },
  tags: { type: [String], index: true }
})

module.exports = mongoose.model('Listing', dataSchema)
