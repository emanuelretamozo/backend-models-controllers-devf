import express from 'express';
import * as bookController from '../controllers/bookController.js';
import createBookValidator from '../middlewares/createBookValidator.js';
import isAuth from '../middlewares/authValidator.js';

const routerBooks = express.Router();


/**
 * TODO: Acá van todas las rutas de libros
 */

routerBooks.use( './books' , isAuth);

routerBooks
  .route('/books')
  .get(bookController.getAllBooks)
  .post(createBookValidator, bookController.createBook);

routerBooks
  .route('/books/:id')
  .get(bookController.getBookById)
  .put(bookController.updateBookById)
  .delete(bookController.deleteBookById);

export default routerBooks;
