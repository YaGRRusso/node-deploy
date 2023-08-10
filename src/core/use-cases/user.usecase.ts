import { Error } from "@core/entities/logic/error.entity";
import { UsecaseInput, UsecaseOutput } from "@core/entities/logic/usecase.entity";
import { User } from "@core/entities/user.entity";
import UserRepository, { createUserSchema, deleteUserSchema, searchUserSchema } from "@core/repositories/user.repository";

export const getUsers = async ({ repository }: UsecaseInput<UserRepository>): UsecaseOutput<User[]> => {
    return await repository.getUsers()
}

export const searchUsers = async ({ repository, data }: UsecaseInput<UserRepository, unknown>): UsecaseOutput<User[]> => {
    const searchedUsers = searchUserSchema.parse(data)

    return await repository.searchUsers(searchedUsers)
}

export const createUser = async ({ repository, data }: UsecaseInput<UserRepository, unknown>): UsecaseOutput<User> => {
    const newUser = createUserSchema.parse(data)

    const registeredUser = await repository.searchUsers({ email: newUser.email })
    if (registeredUser.length) {
        return {
            message: `User email "${newUser.email}" already registered, try another email`,
            error: 'Email Already Exists',
            statusCode: 409
        } as Error
    }

    return await repository.createUser(newUser)
}

export const deleteUser = async ({ repository, data }: UsecaseInput<UserRepository, unknown>): UsecaseOutput<User> => {
    const oldUser = deleteUserSchema.parse(data)

    return await repository.deleteUser(oldUser)
}