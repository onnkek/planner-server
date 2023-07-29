import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from '@nestjs/swagger'
import { User } from "src/users/users.model";
import { Role } from "./roles.model";

@Table({ tableName: 'user-roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {

    //@ApiProperty({ example: '1', description: 'Unique identifier' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    //@ApiProperty({ example: 'ADMIN', description: 'Unique role value' })
    @ForeignKey(() => Role)
    @Column({ type: DataType.INTEGER })
    roleId: number

    //@ApiProperty({ example: 'Administrator', description: 'Role description' })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number

}