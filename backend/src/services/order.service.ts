import { Injectable, NotFoundException } from '@nestjs/common';
import Order from 'src/models/order.model';
import { OrderRepository } from 'src/repository/order.repository';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository
  ) {}
  
  async getOrders(): Promise<Order[]> {
    return await this.orderRepository.findAll();
  }

  async getOrderById(orderId: number): Promise<Order> {
    const foundOrder = await this.orderRepository.findOne(orderId);
    if(!foundOrder) throw new NotFoundException("Order doesn't exist");
    return foundOrder;
  }

  async getUserOrders(userId: number): Promise<Order[]> {
    const foundOrders: Order[] = await this.orderRepository.getUserOrders(userId);
    return foundOrders;
  }

  async createOrder(status: string, paymentMethod: string, deliveryMethod: string, shoppingCartId: number): Promise<Order> {
      const orderDate = new Date();
      return await this.orderRepository.create({ orderDate, status, paymentMethod, deliveryMethod, shoppingCartId} as Order)
  }
}
  