import UserRepository from "@core/repositories/user.repository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default (): UserRepository => {
    const getUsers: UserRepository['getUsers'] = async () => {
        return await prisma.user.findMany()
    }

    const searchUsers: UserRepository['searchUsers'] = async ({ createdAt, email, id, name }) => {
        return await prisma.user.findMany({
            where: {
                AND: [
                    id ? { id } : {},
                    name ? { name: { contains: name } } : {},
                    email ? { email: { contains: email } } : {},
                    createdAt ? { createdAt } : {},
                ],
            },
        })
    }

    const deleteUser: UserRepository['deleteUser'] = async ({ id }) => {
        return await prisma.user.delete({
            where: {
                id
            }
        })
    }

    const createUser: UserRepository['createUser'] = async ({ email, name }) => {
        return await prisma.user.create({
            data: {
                name,
                email
            }
        })
    }

    return {
        getUsers, searchUsers, deleteUser, createUser
    }
}