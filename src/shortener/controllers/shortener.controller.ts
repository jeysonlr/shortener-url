import { ApiTags } from '@nestjs/swagger';
import { ShortenerService } from '../services';
import { ROUTES, SUCCESS_MESSAGES } from '../constants';
import { CreatedResponseDataDto } from './../../shared/dto';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateShortenerDTO, ResponseShortenerDTO } from '../dtos';

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class ShortenerController
 */
@ApiTags('Shortener')
@Controller(ROUTES.SHORTENER_URL)
export class ShortenerController {
    constructor(
        private readonly shortenerService: ShortenerService
    ) { }

    @Post()
    async create(
        @Body() data: CreateShortenerDTO) {
        const shortener = await this.shortenerService.createShortener(data);
        return new CreatedResponseDataDto<ResponseShortenerDTO>(
            SUCCESS_MESSAGES.GET_SUCCESS, shortener
        );
    }
}
