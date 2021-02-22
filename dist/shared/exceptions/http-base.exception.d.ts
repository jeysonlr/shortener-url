import { ErrorResponseDataDto } from '../dto';
import { HttpInternalMessages } from '../enums';
export declare class HttpBaseException extends Error {
    private readonly response;
    private readonly status;
    constructor(response: ErrorResponseDataDto, status: number);
    initMessage(): void;
    getResponse(): ErrorResponseDataDto;
    getStatus(): number;
    static createBody(objectOrError: object | string, message?: string, internalMessage?: string | HttpInternalMessages, statusCode?: number): ErrorResponseDataDto;
}
