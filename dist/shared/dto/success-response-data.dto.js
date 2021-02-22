"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessResponseDataDto = void 0;
const util_1 = require("util");
const common_1 = require("@nestjs/common");
const enums_1 = require("../enums");
const response_data_dto_1 = require("./response-data.dto");
class SuccessResponseDataDto extends response_data_dto_1.ResponseDataDto {
    constructor(message, data, internalMessage = enums_1.HttpInternalMessages.OK, statusCode = common_1.HttpStatus.OK) {
        super(statusCode, internalMessage, message);
        this.getData = () => {
            return this.data;
        };
        this.data = SuccessResponseDataDto.createData(data);
    }
    static createData(objectOrData) {
        if (!objectOrData) {
            return;
        }
        if (util_1.isString(objectOrData)) {
            return objectOrData;
        }
        if (util_1.isObject(objectOrData)) {
            return objectOrData;
        }
        if (util_1.isObject(objectOrData) && Array.isArray(objectOrData)) {
            return objectOrData;
        }
        return objectOrData;
    }
}
exports.SuccessResponseDataDto = SuccessResponseDataDto;
//# sourceMappingURL=success-response-data.dto.js.map