var express = require('express')
var router = express.Router()

// create a link to our drink model
var booksController = require('../controllers/booksController')

router.get( '/', booksController.index )

router.get( '/new', booksController.new )

router.post( '/', booksController.create )

module.exports = router;
