import { Controller } from '@nestjs/common';
import { ProductService } from 'src/services/product.service';

@Controller('users')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

}
