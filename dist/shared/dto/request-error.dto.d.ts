import { ValidationError } from 'class-validator';
export interface RequestErrorInterface {
    readonly constraint: string;
}
export declare class RequestError implements RequestErrorInterface {
    readonly constraint: string;
    constructor(constraint: string);
    getConstraint(): string;
    static builderFromValidationError(validationErrors: ValidationError[]): RequestError[];
}
