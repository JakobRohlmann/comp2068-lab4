const mongoose = require( 'mongoose' )

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
