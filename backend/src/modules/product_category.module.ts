import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductCategoryController } from 'src/controllers/product_category.controller';
import ProductCategory from 'src/models/product_category.model';
import { ProductCategoryService } from 'src/services/product_category.service';

@Module({
  imports: [SequelizeModule.forFeature([ProductCategory])],
  providers: [ProductCategoryService],
  controllers: [ProductCategoryController]
})

export class ProductCategoryModule {}
