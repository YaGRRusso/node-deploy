import { PrismaClient } from "@prisma/client";
import { z } from 'zod'

const prisma = new PrismaClient()

export const getUsers = async () => {
    return await prisma.user.findMany()
}

export const createUser = async (data: unknown) => {
    const createUserSchema = z.object({
        name: z.string(),
        email: z.string().email()
    })

    const { name, email } = createUserSchema.parse(data)

    return await prisma.user.create({
        data: {
            name,
            email
        }
    })
}

export const deleteUser = async (data: unknown) => {
    const deleteUserSchema = z.object({
        id: z.string(),
    })

    const { id } = deleteUserSchema.parse(data)

    return await prisma.user.delete({
        where: {
            id
        }
    })
}