import { Controller } from '@nestjs/common';
import { ProductCategoryService } from 'src/services/product_category.service';

@Controller('users')
export class ProductCategoryController {
  constructor(private readonly productCategoryService: ProductCategoryService) {}

}
