import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderController } from 'src/controllers/order.controller';
import Order from 'src/models/order.model';
import { OrderService } from 'src/services/order.service';
import { OrderRepository } from 'src/repository/order.repository';
import ShoppingCart from 'src/models/shopping_cart.model';

@Module({
  imports: [SequelizeModule.forFeature([Order, ShoppingCart])],
  providers: [OrderService, OrderRepository],
  controllers: [OrderController]
})

export class OrderModule {}
