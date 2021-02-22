import { HttpStatus } from '@nestjs/common';
import { ResponseDataDto } from './response-data.dto';
export declare class SuccessResponseDataDto<D> extends ResponseDataDto {
    private data;
    constructor(message: string, data?: any, internalMessage?: string, statusCode?: HttpStatus);
    getData: () => D;
    static createData<D>(objectOrData: D): D;
}
