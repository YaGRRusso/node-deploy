import { createUserController, deleteUserController, getUserController, getUsersController, searchUsersController, updateUserController } from "@controllers/users.controller";
import { FastifyInstance } from "fastify";

export default (app: FastifyInstance) => {
    app.get('/users/:id', async (req) => await getUserController(req.params))
    app.get('/users', async () => await getUsersController())
    app.get('/search', async (req) => await searchUsersController(req.query))
    app.post('/users', async (req) => await createUserController(req.body))
    app.put('/users/:id', async (req) => await updateUserController(req.params, req.body))
    app.delete('/users/:id', async (req) => await deleteUserController(req.params))
}