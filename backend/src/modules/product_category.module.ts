import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductCategoryController } from 'src/controllers/product_category.controller';
import ProductCategory from 'src/models/product_category.model';
import { ProductCategoryRepository } from 'src/repository/product_category.repository';
import { ProductCategoryService } from 'src/services/product_category.service';

@Module({
  imports: [SequelizeModule.forFeature([ProductCategory])],
  providers: [ProductCategoryService, ProductCategoryRepository],
  controllers: [ProductCategoryController]
})

export class ProductCategoryModule {}
