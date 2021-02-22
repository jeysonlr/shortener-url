"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictException = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../enums");
const http_base_exception_1 = require("./http-base.exception");
class ConflictException extends http_base_exception_1.HttpBaseException {
    constructor(message, objectOrError, description = enums_1.HttpInternalMessages.CONFLICT) {
        super(http_base_exception_1.HttpBaseException.createBody(objectOrError, message, description, common_1.HttpStatus.CONFLICT), common_1.HttpStatus.CONFLICT);
    }
}
exports.ConflictException = ConflictException;
//# sourceMappingURL=conflict.exception.js.map