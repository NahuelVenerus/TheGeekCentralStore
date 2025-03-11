import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from 'src/services/order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @Get('')
  async getOrders() {
    return await this.orderService.getOrders();
  }

  @Post('/create')
  async createOrder(
    @Body('status') status: string, 
    @Body('paymentMethod') paymentMethod: string,
    @Body('deliveryMethod') deliveryMethod: string,
    @Body('shoppingCartId') shoppingCartId: number
  ){
    return await this.orderService.createOrder(status, paymentMethod, deliveryMethod, shoppingCartId)
  }
}
