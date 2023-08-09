import { User } from "@core/entities/user.entity";

export default interface UserRepository {
    getUsers(): Promise<User[]>;
    createUser(): Promise<User>;
    deleteUser(): Promise<User>;
}
