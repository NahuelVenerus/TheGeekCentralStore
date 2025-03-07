import { Table, Model, Column, CreatedAt, DataType, UpdatedAt, ForeignKey } from "sequelize-typescript";
import ShoppingCart from "./shopping_cart.model";

@Table({tableName: 'order', timestamps: true})
export default class Order extends Model<Order> {
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER, field: 'id' })
    declare orderId: number;

    @Column({ allowNull: false, type: DataType.DATE })
    declare orderDate: Date;

    @Column({ allowNull: false, type: DataType.STRING })
    declare status: string;
    
    @Column({ allowNull: false, type: DataType.STRING })
    declare paymentMethod: string;

    @Column({ allowNull: false, type: DataType.STRING })
    declare deliveryMethod: string;

    @ForeignKey(() => ShoppingCart)
    @Column({ allowNull: false, type: DataType.INTEGER })
    declare shoppingCartId: number;

    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;
}