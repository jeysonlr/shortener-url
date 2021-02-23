import { ShortenerService } from '../services';
import { ShortenerController } from './shortener.controller';
import { FakeShortenerRepository } from '../repositories/fakes/shortener.repository.fake';

describe('ShortenerController', () => {
    let shortenerService: ShortenerService;
    let shortenerController: ShortenerController;
    let shortenerRepository: FakeShortenerRepository;

    beforeEach(async () => {
        shortenerRepository = new FakeShortenerRepository();
        shortenerService = new ShortenerService(shortenerRepository);
        shortenerController = new ShortenerController(shortenerService);
    });

    it('should be defined', () => {
        expect(shortenerController).toBeDefined();
        expect(shortenerService).toBeDefined();
        expect(shortenerRepository).toBeDefined();
    });
});
