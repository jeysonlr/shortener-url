import { IsNotEmpty, IsString } from "class-validator";

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class ResponseShortenerDTO
 */
export class ResponseShortenerDTO {

    @IsNotEmpty()
    @IsString()
    newUrl: string;

}
