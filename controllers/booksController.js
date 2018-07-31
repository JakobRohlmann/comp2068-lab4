var Book = require( '../models/book' )

/* VIEWS */
// Index
exports.index = function( req, res, next ) {
  // create our locals parameter
  let locals = {
    title: 'Books List'
  }

  Book.find()
  .then( function ( books ) {
    // add the books to our locals
    locals.books = books;

    // render our view
    res.render( 'books/index', locals )
  })
  .catch( function ( err ) {
    next( err )
  })
}

// New
exports.new = function ( req, res ) {
  // locals
  let locals = {
    title: 'New Book'
  }

  res.render( 'books/new', locals )
}

// Create
exports.create = function ( req, res, next ) {

  Book.create({
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
    price: req.body.price
  })
  .then( function () {
    res.redirect( '/books' )
  })
  .catch( function ( err ) {
    next( err )
  })
}
