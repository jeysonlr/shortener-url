import { ShortenerController } from "../controllers";
import { ShortenerService } from "./shortener.service";
import { FakeShortenerRepository } from "../repositories/fakes/shortener.repository.fake";
import { ResponseShortenerDTO } from "../dtos";

describe('ShortenerService', () => {
    let shortenerService: ShortenerService;
    let fakeShortenerRepository: FakeShortenerRepository;

    let shortenerUrl = '6s8ovs5al';

    beforeEach(() => {
        fakeShortenerRepository = new FakeShortenerRepository();
        shortenerService = new ShortenerService(fakeShortenerRepository);
    });

    it('precisa buscar por url encurtada', async () => {
        // await insertUserType();
        const getShortener = await shortenerService.getShortener(shortenerUrl);

        expect(getShortener).toBeInstanceOf(ResponseShortenerDTO);
        // expect(getShortener.description).toBe(description);
    });
});
