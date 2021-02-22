import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
export declare class DatabaseTypeOrmConfig implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions;
}
