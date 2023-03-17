import { userService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';
export declare class UsersController {
    private user;
    constructor(user: userService);
    get(): Promise<import("../entities/user.entety").User[]>;
    getTasks(): Promise<unknown>;
    getOne(id: number): Promise<import("../entities/user.entety").User>;
    create(payload: CreateUserDto): Promise<import("../entities/user.entety").User>;
    update(id: number, payload: UpdateUserDto): Promise<import("../entities/user.entety").User>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
