import { IsNotEmpty, IsString } from "class-validator";

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class ApiInfoDTO
 */
export class ApiInfoDTO {

    @IsNotEmpty()
    @IsString()
    version: string;

    @IsNotEmpty()
    @IsString()
    environment: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    message: string;

    @IsNotEmpty()
    @IsString()
    documentation: string
}
