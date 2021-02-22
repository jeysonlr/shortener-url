"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseTypeOrmConfig = void 0;
const common_1 = require("@nestjs/common");
let DatabaseTypeOrmConfig = class DatabaseTypeOrmConfig {
    createTypeOrmOptions() {
        return {
            type: process.env.DB_TYPE,
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT, 10),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            entities: [__dirname + '/../**/entities/*.entity{.ts,.js}'],
            migrations: [__dirname + '/../**/entities/*.entity{.ts,.js}'],
            autoLoadEntities: true,
        };
    }
};
DatabaseTypeOrmConfig = __decorate([
    common_1.Injectable()
], DatabaseTypeOrmConfig);
exports.DatabaseTypeOrmConfig = DatabaseTypeOrmConfig;
//# sourceMappingURL=database-connection.config.js.map