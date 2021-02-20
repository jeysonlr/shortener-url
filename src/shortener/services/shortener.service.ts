import { addDays } from 'date-fns';
import { Injectable } from '@nestjs/common';
import { CreateShortenerDTO } from '../dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { ShortenerRepository } from '../repositories';
import { ShortenerDto as ShortenerDTO } from '../dtos/shortener.dto';
import { ResponseShortenerDTO } from './../dtos/response-shortener.dto';

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class ShortenerService
 */
@Injectable()
export class ShortenerService {
    constructor(
        @InjectRepository(ShortenerRepository, 'databaseConnection')
        private readonly shortenerRepository: ShortenerRepository
    ) { }

    /**
     * @param createShortener
     * @return {*}  {Promise<ShortenerEntity>}
     * @memberof ShortenerService
     */
    async createShortener(createShortener: CreateShortenerDTO): Promise<ResponseShortenerDTO> {
        const { url } = createShortener;

        const shortenerDTO = new ShortenerDTO();
        shortenerDTO.url = url;
        shortenerDTO.shorted_url = Math.random().toString(36).slice(4);
        shortenerDTO.expires_in = addDays(new Date(Date.now()), 10);

        const shortener = await this.shortenerRepository.createShortener(shortenerDTO);

        const responseShortenerDTO = new ResponseShortenerDTO();
        responseShortenerDTO.newUrl = process.env.URI + shortener.shorted_url;

        return responseShortenerDTO;
    }
}
