import { ApiTags } from '@nestjs/swagger';
import { ShortenerService } from '../services';
import { ROUTES, SUCCESS_MESSAGES } from '../constants';
import { CreateShortenerDTO, ResponseShortenerDTO } from '../dtos';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreatedResponseDataDto, OkResponseDataDto } from './../../shared/dto';

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class ShortenerController
 */
@ApiTags('Shortener')
@Controller()
export class ShortenerController {
    constructor(
        private readonly shortenerService: ShortenerService
    ) { }

    @Post(ROUTES.SHORTENER_URL)
    async create(
        @Body() data: CreateShortenerDTO) {
        const shortener = await this.shortenerService.createShortener(data);
        return new CreatedResponseDataDto<ResponseShortenerDTO>(
            SUCCESS_MESSAGES.GET_SUCCESS, shortener
        );
    }

    @Get(ROUTES.SHORTENER)
    async getShortener(@Param() shortenerUrl: string) {
        const url = await this.shortenerService.getShortener(shortenerUrl);
        return new OkResponseDataDto<ResponseShortenerDTO>(SUCCESS_MESSAGES.GET_SUCCESS, url);
    }
}
