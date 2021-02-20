import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class CreateShortenerDto
 */
export class CreateShortenerDTO {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    url: string;

}
