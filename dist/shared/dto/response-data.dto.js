"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseDataDto = void 0;
class ResponseDataDto {
    constructor(statusCode, internalMessage, message) {
        this.statusCode = statusCode;
        this.internalMessage = internalMessage;
        this.message = message;
        this.getStatusCode = () => {
            return this.statusCode;
        };
        this.getMessage = () => {
            return this.message;
        };
        this.getInternalMessage = () => {
            return this.internalMessage;
        };
    }
}
exports.ResponseDataDto = ResponseDataDto;
//# sourceMappingURL=response-data.dto.js.map