import { IsNotEmpty, IsString } from "class-validator";

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class ApiInfoDTO
 */
export class ApiInfoDTO {

    @IsNotEmpty()
    @IsString()
    versao: string;

    @IsNotEmpty()
    @IsString()
    ambiente: string;

    @IsNotEmpty()
    @IsString()
    endereco: string;

    @IsNotEmpty()
    @IsString()
    message: string;
}
