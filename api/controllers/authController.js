import bcrypt from 'bcryptjs';
import jwt from 'jwt-simple';
import User from '../models/User.js';
import config from '../config/index.js';

const register = async (req, res) => {
    try {
        const encryptedPass = await bcrypt.hash(req.body.password, 4);
        req.body.password = encryptedPass;
        const user = await User.create(req.body);
        return res.status(200).json({
            message: 'Usuario creado correctamente',
            data: { user }
        })
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                message: 'Ya existe un usuario registrado con ese email',
                status: 'error'
            });
        }
        return res.status(500).json({
            msg: "Error al registrar usuario",
            data: error,
        });
    }
};

const login = async (req, res) => {
    try {
        const user = await User.findOne({ 
            email: req.body.email 
        });

        if (!user) {
            return res.status(400).json({
                message: 'Usuario no encontrado',
                status: 'error'
            });
        }

        const passCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!passCorrect) {
            return res.status(400).json({
                message: 'Contraseña incorrecta',
                status: 'error'
            });
        }
    // TODO: Generar token y devolverlo 


    const expirationDate = new Date(payload.expirationDate);
    if (payload.expirationDate < new Date()) {
        return res.status(401).json({
            msg: 'Token expirado',
        });
    }

    const payload = {
        userId: user.id,
        expirationDate
    };

    const token = jwt.encode(payload, config.jwt.secret);

    return res.status(200).json({
        message: 'Usuario logeado correctamente',
        data: { token },
    });

    } catch (error) {
        return res.status(500).json({
            msg: "Error al logear usuario",
            data: error,
        });
    }
};


export { login, register };