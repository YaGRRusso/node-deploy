import { z } from 'zod'
import usersPostgresRepository from "@infra/database/repositories/usersPostgres.repository";
import { createUser, deleteUser, getUsers } from '@core/use-cases/user.usecase'

const repository = usersPostgresRepository()

export const getUsersController = async () => {
    return await getUsers({ repository })
}

export const createUserController = async (data: unknown) => {
    return await createUser({ repository, data })
}

export const deleteUserController = async (data: unknown) => {
    return await deleteUser({ repository, data })
}