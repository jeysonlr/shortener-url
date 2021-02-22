import { HttpStatus } from '@nestjs/common';
import { HttpInternalMessages } from '../enums';
export declare class ResponseDataDto {
    protected statusCode: HttpStatus;
    protected internalMessage?: string | HttpInternalMessages;
    protected message?: string;
    constructor(statusCode: HttpStatus, internalMessage?: string | HttpInternalMessages, message?: string);
    getStatusCode: () => HttpStatus;
    getMessage: () => string;
    getInternalMessage: () => string | HttpInternalMessages;
}
