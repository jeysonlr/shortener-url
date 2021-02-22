"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringFormatterHelper = void 0;
const common_1 = require("@nestjs/common");
let StringFormatterHelper = class StringFormatterHelper extends String {
    format(str, ...replacements) {
        let i = 0;
        return str.replace(/{}/g, function () {
            return typeof replacements[i] != 'undefined' ? replacements[i++] : '';
        });
    }
    ;
};
StringFormatterHelper = __decorate([
    common_1.Injectable()
], StringFormatterHelper);
exports.StringFormatterHelper = StringFormatterHelper;
//# sourceMappingURL=string-formatter.helper.js.map