import { ShortenerService } from "./shortener.service";
import { CreateShortenerDTO, ResponseShortenerDTO } from "../dtos";
import { FakeShortenerRepository } from "../repositories/fakes/shortener.repository.fake";

const mockUrl = 'http://wisereducacao.com';
const shortedUrl = 'asdfj1234';

describe('ShortenerService', () => {
    let shortenerService: ShortenerService;
    let shortenerRepository: FakeShortenerRepository;

    beforeEach(async () => {
        shortenerRepository = new FakeShortenerRepository();
        shortenerService = new ShortenerService(shortenerRepository);
    });

    async function createShortener(): Promise<ResponseShortenerDTO> {
        const createShortenerDto = new CreateShortenerDTO();
        createShortenerDto.url = mockUrl;

        const shortener = await shortenerService.createShortener(createShortenerDto);

        const responseShortenerDTO = new ResponseShortenerDTO();
        responseShortenerDTO.newUrl = shortener.newUrl;

        return responseShortenerDTO;
    }

    it('should be defined', () => {
        expect(shortenerRepository).toBeDefined();
        expect(shortenerService).toBeDefined();
    });

    it('precisa buscar por encurtador', async () => {
        await createShortener();
        const getShortener = await shortenerService.getShortener(shortedUrl);

        expect(getShortener).toBeInstanceOf(ResponseShortenerDTO);
        expect(mockUrl).toBe(getShortener.url);
    });

    it('criar um encurtador', async () => {
        const createShortenerDto = new CreateShortenerDTO();
        createShortenerDto.url = mockUrl;

        const shortener = await shortenerService.createShortener(createShortenerDto);

        const responseShortenerDTO = new ResponseShortenerDTO();
        responseShortenerDTO.newUrl = shortener.newUrl;

        expect(shortener).toBeInstanceOf(ResponseShortenerDTO);
    });
});
