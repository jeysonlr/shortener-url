import { ShortenerDTO } from '../dtos';
import { ShortenerEntity } from '../entities';
import { Repository } from "typeorm";
export declare class ShortenerRepository extends Repository<ShortenerEntity> {
    createShortener(shortenerDTO: ShortenerDTO): Promise<ShortenerEntity>;
    findShortener(shortenerUrl: string): Promise<ShortenerEntity | null>;
}
