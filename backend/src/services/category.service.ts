import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Category from 'src/models/category.model';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private categoryModel: typeof Category) {}
  
}
