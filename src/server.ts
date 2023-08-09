import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import { z } from 'zod'

const app = fastify()

const prisma = new PrismaClient()

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()

    return res.send({ users }).status(200)
})

app.post('/users', async (req, res) => {
    const createUserSchema = z.object({
        name: z.string(),
        email: z.string().email()
    })

    const { name, email } = createUserSchema.parse(req.body)
    const newUser = await prisma.user.create({
        data: {
            name,
            email
        }
    })

    return res.status(201).send({ newUser })
})

const HOST = process.env.HOST ?? 'localhost'
const PORT = Number(process.env.PORT) ?? 8080

app.listen({
    host: HOST,
    port: PORT
}).then(() => {
    console.log(`Node running in ${HOST}:${PORT}`)
})