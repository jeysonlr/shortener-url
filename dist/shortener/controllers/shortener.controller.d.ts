import { ShortenerService } from '../services';
import { CreateShortenerDTO, ResponseShortenerDTO } from '../dtos';
import { CreatedResponseDataDto, OkResponseDataDto } from './../../shared/dto';
export declare class ShortenerController {
    private readonly shortenerService;
    constructor(shortenerService: ShortenerService);
    create(data: CreateShortenerDTO): Promise<CreatedResponseDataDto<ResponseShortenerDTO>>;
    getShortener(shortenerUrl: string): Promise<OkResponseDataDto<ResponseShortenerDTO>>;
}
