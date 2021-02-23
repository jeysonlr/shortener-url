import { ShortenerDTO } from "../../dtos";
import { ShortenerEntity } from "../../entities";
import ShortenerRepositoryInterface from "../shortener.repository.interface";

export class FakeShortenerRepository implements ShortenerRepositoryInterface {

    async createShortener(shortenerDTO: ShortenerDTO): Promise<ShortenerEntity> {
        const shortenerEntity = new ShortenerEntity();

        shortenerEntity.createAt = new Date(Date.now());
        shortenerEntity.expires_in = shortenerDTO.expires_in
        shortenerEntity.updateAt = new Date(Date.now());
        shortenerEntity.url = shortenerDTO.url;
        shortenerEntity.shorted_url = shortenerDTO.shorted_url;

        return await shortenerEntity;
    }

    async findShortener(shortenerUrl: string): Promise<ShortenerEntity> {
        const shortenerEntity = new ShortenerEntity();

        shortenerEntity.createAt = new Date(Date.now());
        shortenerEntity.expires_in = new Date(Date.now());
        shortenerEntity.updateAt = new Date(Date.now());
        shortenerEntity.url = 'http://wisereducacao.com';
        shortenerEntity.shorted_url = shortenerUrl;

        return await shortenerEntity;
    }
}
