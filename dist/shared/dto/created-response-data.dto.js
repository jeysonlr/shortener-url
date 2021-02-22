"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedResponseDataDto = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../enums");
const success_response_data_dto_1 = require("./success-response-data.dto");
class CreatedResponseDataDto extends success_response_data_dto_1.SuccessResponseDataDto {
    constructor(message, data, internalMessage = enums_1.HttpInternalMessages.CREATED, statusCode = common_1.HttpStatus.CREATED) {
        super(message, data, internalMessage, statusCode);
    }
}
exports.CreatedResponseDataDto = CreatedResponseDataDto;
//# sourceMappingURL=created-response-data.dto.js.map