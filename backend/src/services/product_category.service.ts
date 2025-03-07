import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import ProductCategory from 'src/models/product_category.model';

@Injectable()
export class ProductCategoryService {
  constructor(@InjectModel(ProductCategory) private productCategoryModel: typeof ProductCategory) {}
  
}
