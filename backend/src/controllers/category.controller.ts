import { Controller } from '@nestjs/common';
import { CategoryService } from 'src/services/category.service';

@Controller('categories')
export class categoryController {
  constructor(private readonly categoryService: CategoryService) {}

}
