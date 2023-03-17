export declare class CreateUserDto {
    readonly name: string;
    readonly email: string;
    readonly role: string;
    readonly image: string;
}
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
