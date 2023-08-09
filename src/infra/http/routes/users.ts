import { createUser, deleteUser, getUsers } from "@controllers/users.controller";
import { PrismaClient } from "@prisma/client";
import { FastifyInstance } from "fastify";
import { z } from 'zod'

const prisma = new PrismaClient()

export default (app: FastifyInstance) => {
    app.get('/users', () => getUsers())
    app.post('/users', async (req) => createUser(req.body))
    app.delete('/users/:id', async (req) => deleteUser(req.params))
}