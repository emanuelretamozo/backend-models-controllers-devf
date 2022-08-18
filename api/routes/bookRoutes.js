import express from 'express';
import * as bookController from '../controllers/bookController.js';
import createBookValidator from '../middlewares/createBookValidator.js';

const routerBooks = express.Router();

/**
 * TODO: Acá van todas las rutas de libros
 */

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
