import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryController } from 'src/controllers/category.controller';
import Category from 'src/models/category.model';
import { CategoryRepository } from 'src/repository/category.repository';
import { CategoryService } from 'src/services/category.service';
@Module({
  imports: [SequelizeModule.forFeature([Category])],
  providers: [CategoryService, CategoryRepository],
  controllers: [CategoryController],
  exports: [CategoryService],
})

export class CategoryModule {}
