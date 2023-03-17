import { CreateSubDocDto } from 'src/products/dtos/subDoc.dtos';
export declare class CreateCustomerDto {
    readonly name: string;
    readonly lastName: string;
    readonly phone: string;
    readonly skills: any;
    readonly subDocs: CreateSubDocDto[];
}
declare const UpdateCustomerDto_base: import("@nestjs/common").Type<Partial<CreateCustomerDto>>;
export declare class UpdateCustomerDto extends UpdateCustomerDto_base {
}
export {};
