import jwt from 'jwt-simple';
import config from '../config/index.js';
import User from '../models/User.js';

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if(!token) {
            return res.status(400).json({
                msg: 'Cabecera Authoritation faltante',
            });
        }
        
        const payload = jwt.decode(token, config.jwt.secret);
        
        const user = User.findById(payload.userId);

        if(!user) {
            return res.status(401).json({
                msg: 'Token inválido',
            });
        }

        const expirationDate = Date.parse(payload.expirationDate);
        if (payload.expirationDate < new Date()) {
            return res.status(401).json({
                msg: 'Token expirado',
            });
        }

        next();

    } catch (error) {
        return res.status(401).json({
            msg: 'Token no válido',
            data: error,
        });
    }
}

export default isAuth;