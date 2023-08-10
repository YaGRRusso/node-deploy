import { User } from "@core/entities/user.entity";
import { z } from 'zod'

export const searchUserSchema = z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    email: z.string().optional(),
    createdAt: z.date().optional(),
})

export const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email()
})

export const deleteUserSchema = z.object({
    id: z.string(),
})

type SearchUserInput = z.infer<typeof searchUserSchema>
type CreateUserInput = z.infer<typeof createUserSchema>
type DeleteUserInput = z.infer<typeof deleteUserSchema>
export default interface UserRepository {
    getUsers(): Promise<User[]>;
    searchUsers(data: SearchUserInput): Promise<User[]>
    createUser(data: CreateUserInput): Promise<User>;
    deleteUser(data: DeleteUserInput): Promise<User>;
}
