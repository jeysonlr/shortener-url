"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponseDataDto = void 0;
const dto_1 = require("../dto");
const common_1 = require("@nestjs/common");
const enums_1 = require("../enums");
class ErrorResponseDataDto extends dto_1.ResponseDataDto {
    constructor(message, error, internalMessage = enums_1.HttpInternalMessages.INTERNAL_SERVER_ERROR, statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR) {
        super(statusCode, internalMessage, message);
        this.getError = () => {
            return this.error;
        };
        this.error = error;
    }
}
exports.ErrorResponseDataDto = ErrorResponseDataDto;
//# sourceMappingURL=error-response-data.dto.js.map