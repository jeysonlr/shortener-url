"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortenerRepository = void 0;
const entities_1 = require("../entities");
const constants_1 = require("./../constants");
const typeorm_1 = require("typeorm");
const exceptions_1 = require("./../exceptions");
let ShortenerRepository = class ShortenerRepository extends typeorm_1.Repository {
    async createShortener(shortenerDTO) {
        try {
            return await this.save(shortenerDTO);
        }
        catch (error) {
            throw new exceptions_1.ShortenerDatabaseException(constants_1.ERROR_MESSAGES.SHORTENER_DATABASE_SAVE_ERRROR, error);
        }
    }
    async findShortener(shortenerUrl) {
        try {
            return await this.findOne(shortenerUrl);
        }
        catch (error) {
            throw new exceptions_1.ShortenerDatabaseException(constants_1.ERROR_MESSAGES.SHORTENER_DATABASE_FIND_SHORTENER_ERRROR, error);
        }
    }
};
ShortenerRepository = __decorate([
    typeorm_1.EntityRepository(entities_1.ShortenerEntity)
], ShortenerRepository);
exports.ShortenerRepository = ShortenerRepository;
//# sourceMappingURL=shortener.repository.js.map