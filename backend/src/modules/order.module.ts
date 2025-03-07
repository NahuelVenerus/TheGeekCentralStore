import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderController } from 'src/controllers/order.controller';
import Order from 'src/models/order.model';
import { OrderService } from 'src/services/order.service';

@Module({
  imports: [SequelizeModule.forFeature([Order])],
  providers: [OrderService],
  controllers: [OrderController]
})

export class OrderModule {}
