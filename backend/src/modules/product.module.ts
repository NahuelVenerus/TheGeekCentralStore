import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductController } from '../controllers/product.controller';
import { ProductService } from 'src/services/product.service';
import Product from 'src/models/product.model';

@Module({
  imports: [SequelizeModule.forFeature([Product])],
  providers: [ProductService],
  controllers: [ProductController]
})

export class ProductModule {}
