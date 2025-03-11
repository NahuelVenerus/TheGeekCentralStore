import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Category from 'src/models/category.model';

@Injectable()
export class CategoryRepository {
  constructor(@InjectModel(Category) private categoryModel: typeof Category) {}

  async create(category: Category): Promise<Category> {
    console.log("Entered repository");
    return await this.categoryModel.create(category);
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryModel.findAll();
  }

  async findOne(id: number): Promise<Category | null> {
    return await this.categoryModel.findByPk(id);
  }
}
    