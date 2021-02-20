import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DatabaseTypeOrmConfig } from "./config";
import { HttpModule, Module } from "@nestjs/common";
import { ShortenerModule } from './shortener/shortener.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `env/.${process.env.NODE_ENV}.env`,
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useClass: DatabaseTypeOrmConfig,
            name: 'databaseConnection',
        }),
        HttpModule,
        ShortenerModule,
    ],
    exports: [
        HttpModule,
        ConfigModule,
    ]
})
export class AppModule { }
