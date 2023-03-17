export declare class CreateSubDocDto {
    readonly name: string;
    readonly description: string;
}
declare const UpdateSubDocDto_base: import("@nestjs/common").Type<Partial<CreateSubDocDto>>;
export declare class UpdateSubDocDto extends UpdateSubDocDto_base {
}
export {};
