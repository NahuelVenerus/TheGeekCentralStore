import { Controller, Get, Param } from '@nestjs/common';
import ShoppingCart from 'src/models/shopping_cart.model';
import { ShoppingCartService } from 'src/services/shopping_cart.service';

@Controller('shopping-carts')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}
  
  @Get('/')
  async getAllShoppingCarts(): Promise<ShoppingCart[]> {
    return await this.shoppingCartService.getAllShoppingCarts();
  }

  @Get('/:userId')
  async getShoppingCartByUserId(@Param('userId') userId: number): Promise<ShoppingCart> {
    return await this.shoppingCartService.getShoppingCartByUserId(userId);
  }
}
