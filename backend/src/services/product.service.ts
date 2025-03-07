import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductDTO } from 'src/dtos/product.dto';
import Product from 'src/models/product.model';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product) private productModel: typeof Product) {}

  async createProduct(productData: ProductDTO): Promise<Product> {
    const newProduct = await this.productModel.create(productData as CreationAttributes<Product>);
    return newProduct;
  }
}
