import { Table, Model, Column, CreatedAt, DataType, UpdatedAt, ForeignKey } from "sequelize-typescript";
import Product from "./product.model";
import User from "./user.model";

@Table({tableName: 'cart_item', timestamps: true})
export default class CartItem extends Model<CartItem> {
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER, field: 'id' })
    declare cartItemId: number;

    @Column({ allowNull: false, type: DataType.INTEGER })
    declare quantity: number;

    @ForeignKey(() => User)
    @Column({ allowNull: false, type: DataType.STRING })
    declare userId: string;
    
    @ForeignKey(() => Product)
    @Column({ allowNull: false, type: DataType.STRING })
    declare productId: string;

    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;
}