import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from 'src/services/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

  @Get('/')
  async getAllProducts() {
    return await this.ProductService.getAllProducts();
  }

  @Post('/create')
  async createProduct(
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description: string,
    @Body('rating') rating: number,
    @Body('image') image: string,
    @Body('total_sales') total_sales: number,
    @Body('stock') stock: number
  ) {
    const newProduct = await this.ProductService.createProduct({
      name,
      price,
      description,
      rating,
      image,
      total_sales,
      stock,
    });
    return newProduct;
  }
}
