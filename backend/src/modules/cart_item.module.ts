import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CartItemService } from 'src/services/cart_item.service';
import { CartItemController } from 'src/controllers/cart_item.controller';
import CartItem from 'src/models/cart_item.model';
import { CartItemRepository } from 'src/repository/cart-item.repository';

@Module({
  imports: [SequelizeModule.forFeature([CartItem])],
  providers: [CartItemService, CartItemRepository],
  controllers: [CartItemController]
})

export class CartItemModule {}
