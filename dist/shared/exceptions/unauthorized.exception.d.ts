import { HttpInternalMessages } from '../enums';
import { HttpBaseException } from './http-base.exception';
export declare class UnauthorizedException extends HttpBaseException {
    constructor(message: string, objectOrError?: string | object | any, description?: HttpInternalMessages);
}
