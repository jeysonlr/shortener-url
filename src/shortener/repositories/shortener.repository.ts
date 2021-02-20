import { ShortenerDto } from '../dtos';
import { ShortenerEntity } from '../entities';
import { Repository, EntityRepository, EntityManager } from "typeorm";

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class ShortenerRepository
 * @extends {Repository<ShortenerEntity>}
 */
@EntityRepository(ShortenerEntity)
export class ShortenerRepository extends Repository<ShortenerEntity> {
    constructor(
        private entityManager: EntityManager
    ) { super() }

    /**
     * @param {ShortenerDto} shortenerDto
     * @return {*}  {Promise<ShortenerEntity>}
     * @memberof ShortenerRepository
     */
    async createShortener(shortenerDto: ShortenerDto): Promise<ShortenerEntity> {
        return await this.save(shortenerDto);
    }

    /**
     * @param {string} query
     * @return {*}  {Promise<any>}
     * @memberof ShortenerRepository
     */
    async findGames(query: string): Promise<any> {
        return await this.entityManager.connection.query(query);
    }

    /**
     * @return {*}  {Promise<ShortenerEntity[]>}
     * @memberof ShortenerRepository
     */
    async findAll():Promise<ShortenerEntity[] | null> {
        return await this.find();
    }
}
