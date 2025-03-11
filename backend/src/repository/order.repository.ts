import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import Order from "src/models/order.model";

@Injectable()
export class OrderRepository {
    constructor (@InjectModel(Order) private orderModel: typeof Order) {}

      async create(order: Order): Promise<Order> {
        return await this.orderModel.create(order);
      }
    
      async findAll(): Promise<Order[]> {
        return await this.orderModel.findAll();
      }
    
      async findOne(id: number): Promise<Order | null> {
        return await this.orderModel.findByPk(id);
      }
}