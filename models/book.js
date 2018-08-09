const mongoose = require( 'mongoose' )

const SpecificationSchema = new mongoose.Schema({
  key: {
    type: String,
    required: 'You must have a key.'
  },
  value: {
    type: String,
    required: 'You must have a value.'
  }
})

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Please enter a book title.'
  },
  description: {
    type: String,
    required: 'Please enter a book description.'
  },
  author: {
    type: String,
    required: 'Please enter the author of the book.'
  },
  price: {
    type: Number,
    required: 'Please enter an MSRP value.'
  }
})

module.exports = mongoose.model( 'Book', BookSchema )
