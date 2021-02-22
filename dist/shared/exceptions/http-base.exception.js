"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpBaseException = void 0;
const util_1 = require("util");
const dto_1 = require("../dto");
class HttpBaseException extends Error {
    constructor(response, status) {
        super();
        this.response = response;
        this.status = status;
        this.initMessage();
    }
    initMessage() {
        if (util_1.isString(this.response)) {
            this.message = this.response;
        }
        else if (util_1.isObject(this.response) &&
            util_1.isString(this.response.message)) {
            this.message = this.response.message;
        }
        else if (this.constructor) {
            this.message = this.constructor.name
                .match(/[A-Z][a-z]+|[0-9]+/g)
                .join(' ');
        }
    }
    getResponse() {
        return this.response;
    }
    getStatus() {
        return this.status;
    }
    static createBody(objectOrError, message, internalMessage, statusCode) {
        if (!objectOrError) {
            return new dto_1.ErrorResponseDataDto(message, [], internalMessage, statusCode);
        }
        if (util_1.isString(objectOrError)) {
            return new dto_1.ErrorResponseDataDto(message, [new dto_1.RequestError(objectOrError)], internalMessage, statusCode);
        }
        if (util_1.isObject(objectOrError) && !Array.isArray(objectOrError)) {
            return new dto_1.ErrorResponseDataDto(message, objectOrError, internalMessage, statusCode);
        }
        return new dto_1.ErrorResponseDataDto(message, objectOrError, internalMessage, statusCode);
    }
}
exports.HttpBaseException = HttpBaseException;
//# sourceMappingURL=http-base.exception.js.map