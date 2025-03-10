import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/dtos/product.dto';
import Product from 'src/models/product.model';
import { ProductRepository } from '../repository/product.repository'

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}
  
  async getAllProducts() {
    return await this.productRepository.findAll();
  }

  async createProduct(productData: ProductDTO): Promise<Product> {
    const newProduct = await this.productRepository.create(productData as Product)
    return newProduct;
  }
}
