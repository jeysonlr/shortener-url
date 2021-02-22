"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestException = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../enums");
const http_base_exception_1 = require("./http-base.exception");
class BadRequestException extends http_base_exception_1.HttpBaseException {
    constructor(message, objectOrError, description = enums_1.HttpInternalMessages.BAD_REQUEST) {
        super(http_base_exception_1.HttpBaseException.createBody(objectOrError, message, description, common_1.HttpStatus.BAD_REQUEST), common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.BadRequestException = BadRequestException;
//# sourceMappingURL=bad-request.exception.js.map