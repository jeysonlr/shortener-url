import { RequestError } from '../dto';
import { ResponseDataDto } from '../dto';
import { HttpStatus } from '@nestjs/common';
import { HttpInternalMessages } from '../enums';
export declare class ErrorResponseDataDto extends ResponseDataDto {
    private error;
    constructor(message: string, error?: RequestError[], internalMessage?: string | HttpInternalMessages, statusCode?: HttpStatus);
    getError: () => RequestError[];
}
