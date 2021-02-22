import { HttpStatus } from '@nestjs/common';
import { SuccessResponseDataDto } from './success-response-data.dto';
export declare class CreatedResponseDataDto<D> extends SuccessResponseDataDto<D> {
    constructor(message: string, data?: any, internalMessage?: string, statusCode?: HttpStatus);
}
