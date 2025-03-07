import { Table, Model, Column, CreatedAt, DataType, UpdatedAt, ForeignKey } from "sequelize-typescript";
import Product from "./product.model";
import Category from "./category.model";

@Table({tableName: 'product_categories', timestamps: true})
export default class ProductCategory extends Model<ProductCategory> {
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER, field: 'id' })
    declare productCategoryId: number;

    @ForeignKey(() => Product)
    @Column({ allowNull: false, type: DataType.STRING })
    declare productId: string;
    
    @ForeignKey(() => Category)
    @Column({ allowNull: false, type: DataType.STRING })
    declare categoryId: string;

    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;
}