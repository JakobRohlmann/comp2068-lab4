var express = require('express');
var router = express.Router();

var booksController = require('../controllers/booksController');

router.get( '/', booksController.index );

router.get( '/new', booksController.new );

router.get( '/:id', booksController.show );

router.get( '/:id/edit', booksController.edit );

router.post( '/', booksController.create );

router.post( '/:id', booksController.update );

router.post( '/:id/delete', booksController.delete );

module.exports = router;
