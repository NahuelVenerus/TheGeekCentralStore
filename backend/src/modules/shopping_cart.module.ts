import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ShoppingCartController } from 'src/controllers/shopping_cart.controller';
import ShoppingCart from 'src/models/shopping_cart.model';
import { ShoppingCartService } from 'src/services/shopping_cart.service';

@Module({
  imports: [SequelizeModule.forFeature([ShoppingCart])],
  providers: [ShoppingCartService],
  controllers: [ShoppingCartController]
})
export class ShoppingCartModule {}
