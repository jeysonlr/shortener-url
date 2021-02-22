import { ShortenerDTO } from "src/shortener/dtos";
import { ShortenerEntity } from "src/shortener/entities";
import ShortenerRepositoryInterface from "../shortener.repository.interface";

export class FakeShortenerRepository implements ShortenerRepositoryInterface {
    private shortenerEntity: ShortenerEntity;
    private shortenerDTO: ShortenerDTO;

    async createShortener(shortenerDTO: ShortenerDTO): Promise<ShortenerEntity> {
        shortenerDTO.url = 'http://wisereducacao.com';
        shortenerDTO.shorted_url = 'asdfj1234';
        shortenerDTO.expires_in = new Date(Date.now());
        return await this.shortenerEntity;
    }

    async findShortener(shortenerUrl: string): Promise<ShortenerEntity | null> {
        // shortenerUrl = 'asdfj1234';
        return await this.shortenerEntity
    }
    // findOne(shortenerUrl: string): ShortenerEntity | PromiseLike<ShortenerEntity> {
    //     return this.findOne(shortenerUrl)
    // }
}
