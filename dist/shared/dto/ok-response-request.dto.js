"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OkResponseDataDto = void 0;
const enums_1 = require("../enums");
const success_response_data_dto_1 = require("./success-response-data.dto");
class OkResponseDataDto extends success_response_data_dto_1.SuccessResponseDataDto {
    constructor(message = enums_1.HttpInternalMessages.OK, data) {
        super(message, data);
    }
}
exports.OkResponseDataDto = OkResponseDataDto;
//# sourceMappingURL=ok-response-request.dto.js.map