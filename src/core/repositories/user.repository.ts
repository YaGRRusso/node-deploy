import { User } from "@core/entities/user.entity";
import { z } from 'zod'

export const getUserSchema = z.object({
    id: z.string(),
})

export const searchUserSchema = z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    email: z.string().optional(),
    createdAt: z.date().optional(),
})

export const updateUserSchema = z.object({
    id: z.string(),
    name: z.string().optional(),
    email: z.string().email().optional(),
})

export const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email()
})

export const deleteUserSchema = z.object({
    id: z.string(),
})

type GetUserInput = z.infer<typeof getUserSchema>
type SearchUserInput = z.infer<typeof searchUserSchema>
type CreateUserInput = z.infer<typeof createUserSchema>
type UpdateUserInput = z.infer<typeof updateUserSchema>
type DeleteUserInput = z.infer<typeof deleteUserSchema>
export default interface UserRepository {
    getUser(data: GetUserInput): Promise<User | null>;
    getUsers(): Promise<User[]>;
    searchUsers(data: SearchUserInput): Promise<User[]>
    createUser(data: CreateUserInput): Promise<User>;
    updateUser(data: UpdateUserInput): Promise<User>;
    deleteUser(data: DeleteUserInput): Promise<User>;
}
