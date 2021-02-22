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
exports.ShortenerService = void 0;
const date_fns_1 = require("date-fns");
const common_1 = require("@nestjs/common");
const constants_1 = require("./../constants");
const typeorm_1 = require("@nestjs/typeorm");
const repositories_1 = require("../repositories");
const exceptions_1 = require("./../exceptions");
const dtos_1 = require("../dtos");
let ShortenerService = class ShortenerService {
    constructor(shortenerRepository) {
        this.shortenerRepository = shortenerRepository;
    }
    async createShortener(createShortener) {
        const { url } = createShortener;
        const shortenerDTO = new dtos_1.ShortenerDTO();
        shortenerDTO.url = url;
        shortenerDTO.shorted_url = Math.random().toString(36).slice(4);
        shortenerDTO.expires_in = date_fns_1.addDays(new Date(Date.now()), 10);
        const shortener = await this.shortenerRepository.createShortener(shortenerDTO);
        const responseShortenerDTO = new dtos_1.ResponseShortenerDTO();
        responseShortenerDTO.newUrl = process.env.URI + shortener.shorted_url;
        return responseShortenerDTO;
    }
    async getShortener(shortenerUrl) {
        const shortener = await this.shortenerRepository.findShortener(shortenerUrl);
        if (!shortener) {
            throw new exceptions_1.ShortenerNotFoundException(constants_1.ERROR_MESSAGES.SHORTENER_NOT_FOUND_EXCEPTION);
        }
        const responseShortenerDTO = new dtos_1.ResponseShortenerDTO();
        responseShortenerDTO.url = shortener.url;
        return responseShortenerDTO;
    }
};
ShortenerService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(repositories_1.ShortenerRepository, 'databaseConnection')),
    __metadata("design:paramtypes", [repositories_1.ShortenerRepository])
], ShortenerService);
exports.ShortenerService = ShortenerService;
//# sourceMappingURL=shortener.service.js.map