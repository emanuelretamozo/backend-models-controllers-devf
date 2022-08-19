import dotenv from 'dotenv';

dotenv.config();

export default {
    database: {
        uri: process.env.DB_URI || 'mongodb://localhost:27017/test',
    },
    server: {
        port: process.env.PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    }
};
