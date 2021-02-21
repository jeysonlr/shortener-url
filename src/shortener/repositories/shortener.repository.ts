import { ShortenerDTO } from '../dtos';
import { ShortenerEntity } from '../entities';
import { ERROR_MESSAGES } from './../constants';
import { Repository, EntityRepository } from "typeorm";
import { ShortenerDatabaseException } from './../exceptions';

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class ShortenerRepository
 * @extends {Repository<ShortenerEntity>}
 */
@EntityRepository(ShortenerEntity)
export class ShortenerRepository extends Repository<ShortenerEntity> {

    /**
     * @param {ShortenerDTO} shortenerDTO
     * @return {*}  {Promise<ShortenerEntity>}
     * @memberof ShortenerRepository
     */
    async createShortener(shortenerDTO: ShortenerDTO): Promise<ShortenerEntity> {
        try {
            return await this.save(shortenerDTO);
        } catch (error) {
            throw new ShortenerDatabaseException(
                ERROR_MESSAGES.SHORTENER_DATABASE_SAVE_ERRROR,
                error
            );
        }
    }

    /**
     * @param {string} shortenerUrl
     * @return {*}  {Promise<ShortenerEntity|null>}
     * @memberof ShortenerRepository
     */
    async findShortener(shortenerUrl: string): Promise<ShortenerEntity | null> {
        try {
            return await this.findOne(shortenerUrl);
        } catch (error) {
            throw new ShortenerDatabaseException(
                ERROR_MESSAGES.SHORTENER_DATABASE_FIND_SHORTENER_ERRROR,
                error
            );
        }
    }
}
