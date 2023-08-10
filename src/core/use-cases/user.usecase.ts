import { UsecaseInput, UsecaseOutput } from "@core/entities/logic/usecase.entity";
import { User } from "@core/entities/user.entity";
import UserRepository, { createUserSchema, deleteUserSchema } from "@core/repositories/user.repository";

export const getUsers = async ({ repository }: UsecaseInput<UserRepository>): UsecaseOutput<User[]> => {
    return await repository.getUsers()
}

export const createUser = async ({ repository, data }: UsecaseInput<UserRepository, unknown>): UsecaseOutput<User> => {
    return await repository.createUser(createUserSchema.parse(data))
}

export const deleteUser = async ({ repository, data }: UsecaseInput<UserRepository, unknown>): UsecaseOutput<User> => {
    return await repository.deleteUser(deleteUserSchema.parse(data))
}