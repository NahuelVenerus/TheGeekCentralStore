import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductController } from '../controllers/product.controller';
import { ProductService } from 'src/services/product.service';
import Product from 'src/models/product.model';
import { ProductRepository } from 'src/repository/product.repository';


@Module({
  imports: [SequelizeModule.forFeature([Product])],
  providers: [ProductService, ProductRepository],
  controllers: [ProductController]
})

export class ProductModule {}
