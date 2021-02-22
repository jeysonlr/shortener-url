"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../enums");
const http_base_exception_1 = require("./http-base.exception");
class NotFoundException extends http_base_exception_1.HttpBaseException {
    constructor(message, objectOrError, description = enums_1.HttpInternalMessages.NOT_FOUND) {
        super(http_base_exception_1.HttpBaseException.createBody(objectOrError, message, description, common_1.HttpStatus.NOT_FOUND), common_1.HttpStatus.NOT_FOUND);
    }
}
exports.NotFoundException = NotFoundException;
//# sourceMappingURL=not-found.exception.js.map