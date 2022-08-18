//1.- esuqema de joi
//2.- validar con un try catch

import joi from 'joi';

const createClientSchema = joi.object({
    nombre: joi.string().required(),
    birthday: joi.date().optional(),
    age: joi.number().optional(),
    address: joi.string().optional(),
    referenceName: joi.string().optional(),
    referencePhone: joi.string().optional(),
    email: joi.string().email().optional(),
    phone: joi.string().optional()
});

export default async (req, res, next) => {
    try {
        await createClientSchema.validateAsync(req.body);
        next();
    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: 'error'
        });
    }
}
