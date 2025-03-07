import { Table, Model, Column, CreatedAt, DataType, UpdatedAt } from "sequelize-typescript";

@Table({tableName: 'products', timestamps: true})
export default class Product extends Model<Product> {
    @Column({primaryKey: true, autoIncrement: true, type: DataType.INTEGER, field: 'id'})
    declare productId: number;

    @Column({allowNull: false, type: DataType.STRING})
    declare name: string;

    @Column({allowNull: false, type: DataType.DOUBLE})
    declare price: number;

    @Column({allowNull: false, type: DataType.STRING})
    declare description: string;

    @Column({allowNull: false, type: DataType.DOUBLE})
    declare rating: number;

    @Column({allowNull: false, type: DataType.DOUBLE})
    declare image: string;

    @Column({allowNull: false, type: DataType.INTEGER})
    declare total_sales: number;

    @Column({allowNull: false, type: DataType.INTEGER})
    declare stock: number;

    @CreatedAt
    declare createdAt: Date;
    
    @UpdatedAt
    declare updatedAt: Date;
}
