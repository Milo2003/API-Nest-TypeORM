import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class MongoIdPipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata): string;
}
