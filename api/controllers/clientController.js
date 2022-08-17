import Client from "../models/Client.js";

const createClient = async (req, res) => {
    try {
        const newClient = await Client.create(req.body);
        return res.json({
        msg: "Cliente creado",
        client: newClient,
        });
    } catch (error) {
        return res.status(500).json({
        msg: "Error al crear cliente",
        });
    }
};

const getAllClients = async (_, res) => {
    try {
        const clients = await Client.find();
        return res.json({
        msg: "Clientes encontrados",
        data: clients,
        });
    } catch (error) {
        return res.json({
        msg: "Error al buscar clientes",
        data: error,
        });
    }
};

const getClientById = async (req, res) => {
    try{
        const id = req.params.id;
        const client = await Client.findById(id);
        return res.json({
        msg: "Cliente encontrado",
        data: { client },
        })
    } catch (error) {
        return res.status(500).json({
        msg: "Error al buscar cliente por Id",
        data: error,
        });
    }
};

const updateClientById = async (req, res) => {
    try {
        const { id } = req.params;
        const updateClient = await Client.findByIdAndUpdate(id, req.body, { new: true });
        return res.json({
        msg: "Cliente actualizado",
        data: { client: updateClient },
        });
    } catch (error) {
        return res.json({
        msg: "Error al actualizar cliente",
        data: error,
        });
    }
};

const deleteClientById = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteClient = await Client.findByIdAndDelete(id);
        return res.json({
        msg: "Cliente eliminado",
        data: { client: deleteClient },
        });
    } catch (error) {
        return res.json({
        msg: "Error al eliminar cliente",
        data: error,
        });
    }
};

export { createClient, getAllClients, getClientById, updateClientById, deleteClientById };
