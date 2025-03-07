import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { categoryController } from 'src/controllers/category.controller';
import Category from 'src/models/category.model';
import { CategoryService } from 'src/services/category.service';

@Module({
  imports: [SequelizeModule.forFeature([Category])],
  providers: [CategoryService],
  controllers: [categoryController]
})

export class CategoryModule {}
