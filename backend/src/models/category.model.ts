import { Table, Model, Column, CreatedAt, DataType, UpdatedAt } from "sequelize-typescript";

@Table({tableName: 'categories', timestamps: true})
export default class Category extends Model<Category> {
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER, field: 'id' })
    declare categoryId: number;
    
    @Column({ allowNull: false, type: DataType.STRING })
    declare name: string;

    @Column({ allowNull: false, type: DataType.STRING })
    declare icon: string;

    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;
}