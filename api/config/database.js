import mongoose from 'mongoose';

const db = mongoose.connection;

db.on('connecting', () => {
  console.log('Intentando conectar a la base de datos 🟨');
});

db.on('connected', () => {
  console.log('Se ha conectado a la base de datos 🟩');
});

db.on('error', () => {
  console.log('Error en la conexión de la base de datos 🏮');
});

export default () => {
  mongoose.connect('mongodb://localhost/library');
};
