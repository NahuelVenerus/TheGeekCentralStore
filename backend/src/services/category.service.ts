import { Injectable, NotFoundException } from '@nestjs/common';
import Category from 'src/models/category.model';
import { CategoryRepository } from 'src/repository/category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async createCategory(name: string, icon: string) {
    return await this.categoryRepository.create({name, icon} as Category);
  }

  async getCategories() {
    return await this.categoryRepository.findAll();
  }

  async editCategory(id: number, name: string, icon: string) {
    const category = await this.categoryRepository.findOne(id);

    if(!category) throw new NotFoundException(`Category with ID ${id} was not found`);

    category.name = name;
    category.icon = icon;

    return await category.save();
  }

  async deleteCategory(id: number) {
    const category = await this.categoryRepository.findOne(id);

    if(!category) throw new NotFoundException(`Category with ID ${id} was not found`);

    return await category.destroy();
  }
}
