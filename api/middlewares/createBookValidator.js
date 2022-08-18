
import joi from 'joi';

const createBookSchema = joi.object({
    author: joi.string().required(),
    title: joi.string().optional(),
    genre: joi.string().optional(),
    category: joi.string().optional(),
    language: joi.string().optional(),
    editorial: joi.string().optional(),
    printingDate: joi.date().optional(),
    pages: joi.number().optional(),
    isbn: joi.string().optional(),
    coverage: joi.string().optional(),
});

export default async (req, res, next) => {
    try {
        await createBookSchema.validateAsync(req.body);
        next();
    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: 'error'
        });
    }
};