"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationPipe = void 0;
const lodash_1 = require("lodash");
const dto_1 = require("../dto");
const class_validator_1 = require("class-validator");
const constants_1 = require("../constants");
const class_transformer_1 = require("class-transformer");
const exceptions_1 = require("../exceptions");
const common_1 = require("@nestjs/common");
let ValidationPipe = class ValidationPipe {
    async transform(value, { metatype }) {
        if (lodash_1.isEmpty(value)) {
            throw new exceptions_1.BadRequestException(constants_1.ERROR_MESSAGES.NO_REQUEST_BODY_SENT);
        }
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = class_transformer_1.plainToClass(metatype, value);
        const errors = await class_validator_1.validate(object);
        const requestErrors = dto_1.RequestError.builderFromValidationError(errors);
        if (errors.length > 0) {
            throw new exceptions_1.BadRequestException(constants_1.ERROR_MESSAGES.REQUEST_ERROR, requestErrors);
        }
        return value;
    }
    toValidate(metatype) {
        const types = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
};
ValidationPipe = __decorate([
    common_1.Injectable()
], ValidationPipe);
exports.ValidationPipe = ValidationPipe;
//# sourceMappingURL=validation.pipe.js.map