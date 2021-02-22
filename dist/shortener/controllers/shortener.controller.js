"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortenerController = void 0;
const swagger_1 = require("@nestjs/swagger");
const services_1 = require("../services");
const constants_1 = require("../constants");
const dtos_1 = require("../dtos");
const common_1 = require("@nestjs/common");
const dto_1 = require("./../../shared/dto");
let ShortenerController = class ShortenerController {
    constructor(shortenerService) {
        this.shortenerService = shortenerService;
    }
    async create(data) {
        const shortener = await this.shortenerService.createShortener(data);
        return new dto_1.CreatedResponseDataDto(constants_1.SUCCESS_MESSAGES.GET_SUCCESS, shortener);
    }
    async getShortener(shortenerUrl) {
        const url = await this.shortenerService.getShortener(shortenerUrl);
        return new dto_1.OkResponseDataDto(constants_1.SUCCESS_MESSAGES.GET_SUCCESS, url);
    }
};
__decorate([
    common_1.Post(constants_1.ROUTES.SHORTENER_URL),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateShortenerDTO]),
    __metadata("design:returntype", Promise)
], ShortenerController.prototype, "create", null);
__decorate([
    common_1.Get(constants_1.ROUTES.SHORTENER),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShortenerController.prototype, "getShortener", null);
ShortenerController = __decorate([
    swagger_1.ApiTags('Shortener'),
    common_1.Controller(),
    __metadata("design:paramtypes", [services_1.ShortenerService])
], ShortenerController);
exports.ShortenerController = ShortenerController;
//# sourceMappingURL=shortener.controller.js.map