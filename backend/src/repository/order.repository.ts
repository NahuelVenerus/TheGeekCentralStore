import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { where } from "sequelize";
import Order from "src/models/order.model";
import ShoppingCart from "src/models/shopping_cart.model";

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

      async getUserOrders(userId: number): Promise<Order[]> {
        return await this.orderModel.findAll({
          include: [
            {
              model: ShoppingCart,
              where: { userId },
              required: true,
            },
          ],
        });
      }
      
}