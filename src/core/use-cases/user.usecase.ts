import { UsecaseInput, UsecaseOutput } from "@core/entities/logic/usecase.entity";
import { User } from "@core/entities/user.entity";
import UserRepository, { createUserSchema, deleteUserSchema, getUserSchema, searchUserSchema, updateUserSchema } from "@core/repositories/user.repository";

export const getUser = async ({ repository, data }: UsecaseInput<UserRepository, unknown>): UsecaseOutput<User> => {
    const parsedData = getUserSchema.safeParse(data)
    if (!parsedData.success) return { data: null, error: { code: parsedData.error.issues[0].message, status: 400 } }
    const id = parsedData.data

    const user = await repository.getUser(id)
    if (!user) return { data: null, error: { code: 'userNotFound', status: 404 } }

    return { data: user, error: null }
}

export const getUsers = async ({ repository }: UsecaseInput<UserRepository>): UsecaseOutput<User[]> => {
    return { data: await repository.getUsers(), error: null }
}

export const searchUsers = async ({ repository, data }: UsecaseInput<UserRepository, unknown>): UsecaseOutput<User[]> => {
    const parsedData = searchUserSchema.safeParse(data)
    if (!parsedData.success) return { data: null, error: { code: parsedData.error.issues[0].message, status: 400 } }
    const searchedUsers = parsedData.data

    return { data: await repository.searchUsers(searchedUsers), error: null }
}

export const createUser = async ({ repository, data }: UsecaseInput<UserRepository, unknown>): UsecaseOutput<User> => {
    const parsedData = createUserSchema.safeParse(data)
    if (!parsedData.success) return { data: null, error: { code: parsedData.error.issues[0].message, status: 400 } }
    const newUser = parsedData.data

    const registeredUser = await repository.searchUsers({ email: newUser.email })
    if (registeredUser.length) return { data: null, error: { code: 'emailAlreadyExists', status: 409 } }

    return { data: await repository.createUser(newUser), error: null }
}

export const updateUser = async ({ repository, data }: UsecaseInput<UserRepository, unknown>): UsecaseOutput<User> => {
    const parsedData = updateUserSchema.safeParse(data)
    if (!parsedData.success) return { data: null, error: { code: parsedData.error.issues[0].message, status: 400 } }
    const updatingUser = parsedData.data

    const oldUser = await repository.getUser({ id: updatingUser.id })
    if (!oldUser) return { data: null, error: { code: 'userNotFound', status: 401 } }

    return { data: await repository.updateUser(updatingUser), error: null }
}

export const deleteUser = async ({ repository, data }: UsecaseInput<UserRepository, unknown>): UsecaseOutput<User> => {
    const parsedData = deleteUserSchema.safeParse(data)
    if (!parsedData.success) return { data: null, error: { code: parsedData.error.issues[0].message, status: 400 } }
    const id = parsedData.data

    const oldUser = await repository.getUser(id)
    if (!oldUser) return { data: null, error: { code: 'userNotFound', status: 401 } }

    return { data: await repository.deleteUser(id), error: null }
}