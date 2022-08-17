import moongose from 'mongoose';

const schema = new moongose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    birthday: Date,
    age: Number,
    address: String,
    referenceName: String,
    referencePhone: String,
    email: String,
    phone: String
});

export default moongose.model('Client', schema);