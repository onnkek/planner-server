import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    
    @ApiProperty({example: 'user@email.com', description: 'Unique email'})
    readonly email: string
    
    @ApiProperty({example: 'qwerty', description: 'Password'})
    readonly password: string
}