import { IsNotEmpty, IsString } from 'class-validator';
import { CreateDateColumn } from 'typeorm';

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class ShortenerDTO
 */
export class ShortenerDTO {

    @IsNotEmpty()
    @IsString()
    url: string;

    @IsNotEmpty()
    @IsString()
    shorted_url: string;

    @CreateDateColumn({ type: 'timestamp' })
    expires_in: Date;
}
