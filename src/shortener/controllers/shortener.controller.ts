import { ApiTags } from '@nestjs/swagger';
import { ShortenerService } from '../services';
import { ROUTES, SUCCESS_MESSAGES } from '../constants';
import { Controller, Get, Post, Body, Param, ParseUUIDPipe, DefaultValuePipe, ParseArrayPipe, ParseIntPipe } from '@nestjs/common';
import { ApiInfoDTO, CreateShortenerDTO, ResponseShortenerDTO } from '../dtos';
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

    @Get(ROUTES.API_INFO)
    async checkApi() {
        const apiInfo = new ApiInfoDTO();
        apiInfo.environment = process.env.ENVIRONMENT;
        apiInfo.version = process.env.VERSION;
        apiInfo.address = process.env.URI;
        apiInfo.message = process.env.MESSAGE;
        apiInfo.documentation = process.env.DOCUMENTATION;
        return new OkResponseDataDto<ApiInfoDTO>(SUCCESS_MESSAGES.GET_SUCCESS, apiInfo);
    }

    @Post(ROUTES.SHORTENER_URL)
    async create(
        @Body() data: CreateShortenerDTO) {
        const shortener = await this.shortenerService.createShortener(data);
        return new CreatedResponseDataDto<ResponseShortenerDTO>(
            SUCCESS_MESSAGES.GET_SUCCESS, shortener
        );
    }

    @Get(ROUTES.SHORTENER)
    async getShortener(@Param('shorted_url') shortenerUrl: string) {
        const url = await this.shortenerService.getShortener(shortenerUrl);
        return new OkResponseDataDto<ResponseShortenerDTO>(SUCCESS_MESSAGES.GET_SUCCESS, url);
    }
}
