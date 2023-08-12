import usersPostgresRepository from "@infra/database/repositories/usersPostgres.repository";
import { createUser, deleteUser, getUser, getUsers, searchUsers, updateUser } from '@core/use-cases/user.usecase'

const repository = usersPostgresRepository()

export const getUserController = async (data: unknown) => {
    return await getUser({ repository, data })
}

export const getUsersController = async () => {
    return await getUsers({ repository })
}

export const searchUsersController = async (data: unknown) => {
    return await searchUsers({ repository, data })
}

export const createUserController = async (data: unknown) => {
    return await createUser({ repository, data })
}

export const updateUserController = async (id: unknown, data: unknown) => {
    const parsedData = { ...id as object, ...data as object }
    return await updateUser({ repository, data: parsedData })
}

export const deleteUserController = async (data: unknown) => {
    return await deleteUser({ repository, data })
}