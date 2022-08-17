import express from 'express';
import * as bookController from '../controllers/bookController.js';

const routerBooks = express.Router();

/**
 * TODO: Acá van todas las rutas de libros
 */

routerBooks
  .route('/books')
  .get(bookController.getAllBooks)
  .post(bookController.createBook);

routerBooks
  .route('/books/:id')
  .get(bookController.getBookById)
  .put(bookController.updateBookById)
  .delete(bookController.deleteBookById);

export default routerBooks;
