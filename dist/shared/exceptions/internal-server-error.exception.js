"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerErrorException = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../enums");
const http_base_exception_1 = require("./http-base.exception");
class InternalServerErrorException extends http_base_exception_1.HttpBaseException {
    constructor(message, objectOrError, description = enums_1.HttpInternalMessages.INTERNAL_SERVER_ERROR) {
        super(http_base_exception_1.HttpBaseException.createBody(objectOrError, message, description, common_1.HttpStatus.INTERNAL_SERVER_ERROR), common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
exports.InternalServerErrorException = InternalServerErrorException;
//# sourceMappingURL=internal-server-error.exception.js.map