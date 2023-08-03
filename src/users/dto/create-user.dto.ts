import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsEmail, Length } from "class-validator"

export class CreateUserDto {

    @ApiProperty({ example: 'user@email.com', description: 'Unique email' })
    @IsString({ message: 'Email must be a string' })
    @IsEmail({}, { message: 'Incorrect email' })
    readonly email: string

    @ApiProperty({ example: 'qwerty', description: 'Password' })
    @IsString({ message: 'Password must be a string' })
    @Length(4, 1000, { message: 'Password must be more than 4 characters' })
    readonly password: string
}