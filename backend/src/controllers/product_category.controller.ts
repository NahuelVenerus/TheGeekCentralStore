import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ProductCategoryService } from 'src/services/product_category.service';

@Controller('product-categories')
export class ProductCategoryController {
  constructor(private readonly productCategoryService: ProductCategoryService) {}

   @Get('/')
   async findAllProductCategories(@Query('productId') productId: number) {
    return this.productCategoryService.findCategoriesByProductId(productId)     
   }

   @Post('/')
   async createProductCategory(
    @Body('productId') productId: number,
    @Body('categoryId') categoryId: number) {
    return this.productCategoryService.createProductCategory(productId, categoryId);
   }

}
