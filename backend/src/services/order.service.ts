import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Order from 'src/models/order.model';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order) private orderModel: typeof Order) {}
  
  async getOrders(): Promise<Order[]> {
    return await this.orderModel.findAll();
  }

}
