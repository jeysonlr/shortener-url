import { Module } from '@nestjs/common';
import { ShortenerService } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShortenerController } from './controllers';
import { ShortenerRepository } from './repositories';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ShortenerRepository,
        ], 'databaseConnection'),
    ],
    providers: [
        ShortenerService,
    ],
    controllers: [
        ShortenerController,
    ],
})
export class ShortenerModule { }
