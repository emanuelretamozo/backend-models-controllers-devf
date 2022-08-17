import express from 'express';
import * as clientController from '../controllers/clientController.js';

const routerClients = express.Router();

routerClients
    .route('/clients')
    .get(clientController.getAllClients)
    .post(clientController.createClient);
    
routerClients
    .route('/clients/:id')
    .get(clientController.getClientById)
    .put(clientController.updateClientById);

export default routerClients;
