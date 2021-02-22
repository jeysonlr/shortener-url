import { ShortenerRepository } from '../repositories';
import { CreateShortenerDTO, ResponseShortenerDTO } from '../dtos';
export declare class ShortenerService {
    private readonly shortenerRepository;
    constructor(shortenerRepository: ShortenerRepository);
    createShortener(createShortener: CreateShortenerDTO): Promise<ResponseShortenerDTO>;
    getShortener(shortenerUrl: string): Promise<ResponseShortenerDTO>;
}
