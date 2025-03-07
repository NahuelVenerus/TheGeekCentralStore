import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from 'src/config/database.config';
import { UserModule } from './user.module';
import { CartItemModule } from './cart_item.module';
import { CategoryModule } from './category.module';
import { OrderModule } from './order.module';
import { ProductCategoryModule } from './product_category.module';
import { ProductModule } from './product.module';
import { ShoppingCartModule } from './shopping_cart.module';
require('dotenv').config();

@Module({
  imports: [
    SequelizeModule.forRoot(databaseConfig),
    UserModule,
    CartItemModule,
    CategoryModule,
    OrderModule,
    ProductCategoryModule,
    ProductModule,
    ShoppingCartModule
  ],
})
export class AppModule {}
