import { Injectable } from '@nestjs/common';
import Order from 'src/models/order.model';
import { OrderRepository } from 'src/repository/order.repository';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}
  
  async getOrders(): Promise<Order[]> {
    return await this.orderRepository.findAll();
  }

  async createOrder(status: string, paymentMethod: string, deliveryMethod: string, shoppingCartId: number): Promise<Order> {
      const orderDate = new Date();
      return await this.orderRepository.create({ orderDate, status, paymentMethod, deliveryMethod, shoppingCartId} as Order)
  }
  }
