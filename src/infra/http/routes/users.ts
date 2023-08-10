import { createUserController, deleteUserController, getUsersController } from "@controllers/users.controller";
import { FastifyInstance } from "fastify";

export default (app: FastifyInstance) => {
    app.get('/users', () => getUsersController())
    app.post('/users', async (req) => createUserController(req.body))
    app.delete('/users/:id', async (req) => deleteUserController(req.params))
}