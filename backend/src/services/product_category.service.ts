import { Injectable } from '@nestjs/common';
import ProductCategory from 'src/models/product_category.model';
import { ProductCategoryRepository } from 'src/repository/product_category.repository';

@Injectable()
export class ProductCategoryService {
  constructor(private productCategoryRepository: ProductCategoryRepository) {}

  async findCategoriesByProductId(productId: number): Promise<ProductCategory[]> {
    return await this.productCategoryRepository.findCategoriesByProductId(productId);
  }

  async createProductCategory(productId: number, categoryId: number): Promise<ProductCategory> {
    return await this.productCategoryRepository.createProductCategory({ productId, categoryId } as ProductCategory);
  }
}

