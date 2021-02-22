"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedException = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../enums");
const http_base_exception_1 = require("./http-base.exception");
class UnauthorizedException extends http_base_exception_1.HttpBaseException {
    constructor(message, objectOrError, description = enums_1.HttpInternalMessages.UNAUTHORIZED) {
        super(http_base_exception_1.HttpBaseException.createBody(objectOrError, message, description, common_1.HttpStatus.UNAUTHORIZED), common_1.HttpStatus.UNAUTHORIZED);
    }
}
exports.UnauthorizedException = UnauthorizedException;
//# sourceMappingURL=unauthorized.exception.js.map