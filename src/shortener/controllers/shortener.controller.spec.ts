import { ShortenerService } from '../services';
import { ShortenerController } from './shortener.controller';
import { FakeShortenerRepository } from '../repositories/fakes/shortener.repository.fake';

describe('ShortenerController', () => {
    let shortenerService: ShortenerService;
    let shortenerController: ShortenerController;
    let fakeShortenerRepository: FakeShortenerRepository;

    beforeEach(async () => {
        fakeShortenerRepository = new FakeShortenerRepository();
        shortenerService = new ShortenerService(fakeShortenerRepository);
        shortenerController = new ShortenerController(shortenerService);
    });
});
