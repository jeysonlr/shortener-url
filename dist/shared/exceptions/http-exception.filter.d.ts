import { HttpBaseException } from './http-base.exception';
import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpBaseException, host: ArgumentsHost): void;
}
