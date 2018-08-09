var Book = require( '../models/book' );

// Index
exports.index = function( req, res, next ) {
  let locals = {
    title: 'Books List'
  };

  Book.find()
  .then( function ( books ) {
    locals.books = books;

    res.render( 'books/index', locals )
  })
  .catch( function ( err ) {
    next( err )
  });
};

// Show
exports.show = function ( req, res, next ) {
  let locals = {
    title: 'Book'
  };

  Book.findById({
    _id: req.params.id
  })
  .then( function ( book ) {
    locals.book = book;

    res.render( 'books/show', locals )
  })
  .catch( function ( err ) {
    next( err )
  })
};

// New
exports.new = function ( req, res ) {
  let locals = {
    title: 'New Book'
  };

  res.render( 'books/new', locals )
};

// Edit
exports.edit = function ( req, res, next ) {
  let locals = {
    title: 'Edit Book'
  };

  Book.findById({
    _id: req.params.id
  })
  .then( function ( book ) {
    locals.book = book;

    res.render( 'books/edit', locals )
  })
  .catch( function ( err ) {
    next( err )
  })
};

// Create
exports.create = function ( req, res, next ) {
  let specifications = null
  if (req.body['specification[key]'] && req.body['specification[value]']) {
    let spec_keys = req.body['specification[key]']
    let spec_values = req.body['specification[value]']

    specifications =[]

    if ( spec_keys && Array.isArray( spec_keys ) ) {
      for (let i = 0; i < spec_keys.length; i++) {
        specifications.push( { key: spec_keys[i], value: spec_values[i] } )
      }
    } else {
      specifications.push( { key: spec_keys, value: spec_values } )
    }
  }

  Book.create({
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
    price: req.body.price,
    specifications: specifications
  })
  .then( function () {
    res.redirect( '/books' )
  })
  .catch( function ( err ) {
    next( err )
  })
};

// Update
exports.update = function ( req, res, next ) {
  let specifications = null
  if (req.body['specification[key]'] && req.body['specification[value]']) {
    let spec_keys = req.body['specification[key]']
    let spec_values = req.body['specification[value]']

    specifications =[]

    if ( spec_keys && Array.isArray( spec_keys ) ) {
      for (let i = 0; i < spec_keys.length; i++) {
        specifications.push( { key: spec_keys[i], value: spec_values[i] } )
      }
    } else {
      specifications.push( { key: spec_keys, value: spec_values } )
    }
  }

  Book.findById( req.params.id )
  .then(function ( book ) {
    book.title = req.body.title
    book.description = req.body.description
    book.author = req.body.author
    book.price = req.body.price
    book.specifications = specifications

    book.save()
    .then(  function () {
      res.redirect( '/books' )
    })
    .catch( function ( err ) {
      next( err )
    })
  })
  .catch(function ( err ) {
    next( err )
  })
};

// Delete
exports.delete = function ( req, res ) {
  Book.remove({
    _id: req.body.id
  })
  .then( function () {
    res.redirect( '/books' )
  })
  .catch( function ( err ) {
    next( err )
  })
};
