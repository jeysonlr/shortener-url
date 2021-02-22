"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestError = void 0;
const lodash_1 = require("lodash");
class RequestError {
    constructor(constraint) {
        this.constraint = constraint;
    }
    getConstraint() {
        return this.constraint;
    }
    static builderFromValidationError(validationErrors) {
        const errors = [];
        lodash_1.map(validationErrors, (validationError) => {
            const { constraints } = validationError;
            return lodash_1.forEach(constraints, (value) => {
                errors.push(new RequestError(value));
            });
        });
        return errors;
    }
}
exports.RequestError = RequestError;
//# sourceMappingURL=request-error.dto.js.map