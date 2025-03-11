import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import ProductCategory from 'src/models/product_category.model';

@Injectable()
export class ProductCategoryRepository {
  constructor(@InjectModel(ProductCategory) private productCategoryModel: typeof ProductCategory) {}

  // async getAllUsers() {
  //   return await this.userRepository.getAllUsers();
  // }

  async findCategoriesByProductId(productId: number): Promise<ProductCategory[]> {
    return await this.productCategoryModel.findAll({ where: { productId } });
  }

  async createProductCategory(data: ProductCategory): Promise<ProductCategory> {
    return await this.productCategoryModel.create(data);
  }
}
