import { User } from "@core/entities/user.entity";
import { z } from 'zod'

type CreateUserInput = z.infer<typeof createUserSchema>
export const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email()
})

type DeleteUserInput = z.infer<typeof deleteUserSchema>
export const deleteUserSchema = z.object({
    id: z.string(),
})
export default interface UserRepository {
    getUsers(): Promise<User[]>;
    createUser(data: CreateUserInput): Promise<User>;
    deleteUser(data: DeleteUserInput): Promise<User>;
}
