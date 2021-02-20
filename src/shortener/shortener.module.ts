import { Module } from '@nestjs/common';
import { ShortenerService } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShortenerController } from './controllers';
import { ShortenerRepository } from './repositories';
import { StringFormatterHelper } from 'src/shared/helper';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ShortenerRepository,
        ], 'databaseConnection'),
    ],
    providers: [
        StringFormatterHelper,
        ShortenerService,
    ],
    controllers: [
        ShortenerController,
    ],
})
export class ShortenerModule { }
