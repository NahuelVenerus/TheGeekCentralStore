import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CategoryService } from 'src/services/category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/create')
  async createCategory(@Body('name') name: string, @Body('icon') icon: string) {
    return await this.categoryService.createCategory(name, icon);
  }

  @Get()
  async getCategories() {
    return await this.categoryService.getCategories();
  }

  @Put('/update') 
  async editCategory(
    @Body('id') id: number, 
    @Body('name') name: string, 
    @Body('icon') icon: string) {
    return await this.categoryService.editCategory(id, name, icon);
  }

  @Delete('/delete')
  async deleteCategory(
    @Body('id') id: number) {
    return await this.categoryService.deleteCategory(id);
  }
}
