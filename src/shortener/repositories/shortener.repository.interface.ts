import { ShortenerDTO } from "../dtos";
import { ShortenerEntity } from "../entities";

export default interface ShortenerRepositoryInterface {
    createShortener(shortenerDTO: ShortenerDTO): Promise<ShortenerEntity>;
    findShortener(shortenerUrl: string): Promise<ShortenerEntity | null>;
};
