import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from '@nestjs/swagger'
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
    email: string
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    
    @ApiProperty({example: '1', description: 'Unique identifier'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number
    
    @ApiProperty({example: 'user@email.com', description: 'Unique email'})
    @Column({type: DataType.STRING, unique: true, allowNull: false })
    email: string
    
    @ApiProperty({example: 'qwerty', description: 'Password'})
    @Column({type: DataType.STRING })
    password: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}