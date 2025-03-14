import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderService } from 'src/services/order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @Get('')
  async getOrders() {
    return await this.orderService.getOrders();
  }

  @Get('/:orderId')
  async getOrderById(@Param('orderId') orderId: number) {
    return await this.orderService.getOrders();
  }

  @Get('/user/:userId')
  async getUserOrders(@Param('userId') userId: number) {
    return await this.orderService.getUserOrders(userId)
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
