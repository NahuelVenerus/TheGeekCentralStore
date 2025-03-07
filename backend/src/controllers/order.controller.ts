import { Controller, Get } from '@nestjs/common';
import { OrderService } from 'src/services/order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @Get('')
  async getOrders() {
    return await this.orderService.getOrders();
  }
}
