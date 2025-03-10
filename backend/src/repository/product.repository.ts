import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Product from 'src/models/product.model';

@Injectable()
export class ProductRepository {
  @InjectModel(Product) 
  private productModel: typeof Product;

  constructor() {}

  async create(category: Product): Promise<Product> {
    return await this.productModel.create(category);
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.findAll();
  }

  async findOne(id: number): Promise<Product | null> {
    return await this.productModel.findByPk(id);
  }
}
