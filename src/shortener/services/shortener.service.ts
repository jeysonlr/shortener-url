import { Injectable } from '@nestjs/common';
import { addDays, isBefore } from 'date-fns';
import { ERROR_MESSAGES } from './../constants';
import { InjectRepository } from '@nestjs/typeorm';
import { ShortenerRepository } from '../repositories';
import { CreateShortenerDTO, ShortenerDTO, ResponseShortenerDTO } from '../dtos';
import { ShortenerUnauthorizedException, ShortenerNotFoundException } from './../exceptions';
import ShortenerRepositoryInterface from '../repositories/shortener.repository.interface';

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class ShortenerService
 */
@Injectable()
export class ShortenerService {
    constructor(
        @InjectRepository(ShortenerRepository, 'databaseConnection')
        private readonly shortenerRepository: ShortenerRepositoryInterface
    ) { }

    /**
     * @param createShortener
     * @return {*}  {Promise<ResponseShortenerDTO>}
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

    /**
     * @param getShortener
     * @return {*}  {Promise<ResponseShortenerDTO>}
     * @memberof ShortenerService
     */
    async getShortener(shortenerUrl: string): Promise<ResponseShortenerDTO> {
        const shortener = await this.shortenerRepository.findShortener(shortenerUrl);

        if (!shortener) {
            throw new ShortenerNotFoundException(
                ERROR_MESSAGES.SHORTENER_NOT_FOUND_EXCEPTION
            );
        }

        if (isBefore(shortener.expires_in, new Date(Date.now()))) {
            throw new ShortenerUnauthorizedException(
                ERROR_MESSAGES.SHORTENER_EXPIRED_EXCEPTION
            );
        }

        const responseShortenerDTO = new ResponseShortenerDTO();
        responseShortenerDTO.url = shortener.url;

        return responseShortenerDTO;
    }
}
