import { SuccessResponseDataDto } from './success-response-data.dto';
export declare class OkResponseDataDto<D> extends SuccessResponseDataDto<D> {
    constructor(message?: string, data?: any);
}
