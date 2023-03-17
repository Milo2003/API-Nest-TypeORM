export declare class CreateCategoryDto {
    readonly name: string;
    readonly description: string;
    readonly image: string;
}
declare const UpdateCategoryDto_base: import("@nestjs/common").Type<Partial<CreateCategoryDto>>;
export declare class UpdateCategoryDto extends UpdateCategoryDto_base {
}
export {};
