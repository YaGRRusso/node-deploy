import { createUserController, deleteUserController, getUsersController, searchUsersController } from "@controllers/users.controller";
import { FastifyInstance } from "fastify";

export default (app: FastifyInstance) => {
    app.get('/users', async () => await getUsersController())
    app.get('/search', async (req) => await searchUsersController(req.query))
    app.post('/users', async (req) => await createUserController(req.body))
    app.delete('/users/:id', async (req) => await deleteUserController(req.params))
}