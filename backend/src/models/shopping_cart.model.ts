import { Model, Column, CreatedAt, DataType, ForeignKey, Table, UpdatedAt } from "sequelize-typescript";
import User from "./user.model";

@Table({tableName: 'shopping_cart', timestamps: true})
export default class ShoppingCart extends Model<ShoppingCart> {
    @Column({primaryKey: true, autoIncrement: true, type: 'INTEGER', field: 'id'})
    declare shoppingCartId: number;

    @Column({allowNull: false, type: DataType.DOUBLE})
    declare total: number;

    @ForeignKey(() => User)
    @Column({allowNull: false, type: DataType.INTEGER})
    declare userId: number;
    
    @CreatedAt
    declare createdAt: Date;
    
    @UpdatedAt
    declare updatedAt: Date;
}
