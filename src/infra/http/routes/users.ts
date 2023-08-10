import { createUserController, deleteUserController, getUsersController, searchUsersController } from "@controllers/users.controller";
import { FastifyInstance } from "fastify";

export default (app: FastifyInstance) => {
    app.get('/users', async () => getUsersController())
    app.get('/search', async (req) => searchUsersController(req.query))
    app.post('/users', async (req) => createUserController(req.body))
    app.delete('/users/:id', async (req) => deleteUserController(req.params))
}