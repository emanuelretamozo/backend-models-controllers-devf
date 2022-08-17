import Book from '../models/Book.js';

const createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    return res.json({
      msg: 'Libro creado',
      book: newBook,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al crear libro',
    });
  }
};

const getAllBooks = async (_, res) => {
  try {
    const books = await Book.find();
    return res.json({
      msg: 'Libros encontrados',
      data: books,
    });
  } catch (error) {
      return res.json({
        msg: 'Error al buscar libros',
        data: error
      });
  }
};

const getBookById = async (req, res) => {
  try{
    const id = req.params.id;
    const book = await Book.findById(id);
    return res.json({
      msg: 'Libro encontrado',
      data: { book },
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar libro por Id',
      data: error,
    });
  }
};

const updateBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
    return res.json({
      msg: 'Libro actualizado',
      data: { book: updateBook },
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al actualizar libro',
      data: error,
    });
  }
};

const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.findByIdAndDelete(id);
    return res.json({
      msg: 'Libro eliminado',
      data: { book: deleteBook }
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al eliminar libro por id',
      data: error,
    });
  }
};

export { getAllBooks, createBook, getBookById, updateBookById, deleteBookById };
