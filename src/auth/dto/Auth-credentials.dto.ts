import { IsString, MaxLength, MinLength, Matches } from "class-validator";

export class AuthCredentialsDto {

    @IsString()
    @MinLength(2)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    password: string;
}