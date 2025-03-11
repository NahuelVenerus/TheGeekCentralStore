import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import CartItem from 'src/models/cart_item.model';
import { CartItemService } from 'src/services/cart_item.service';

@Controller('cart-items')
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}


  @Get('/')
  async getAllCartItems(): Promise<CartItem[]> {
    return await this.cartItemService.getAllCartItems();
  }

  @Get('/:cartItemId')
  async getCartItemById(@Param('cartItemId') cartItemId: number): Promise<CartItem> {
    return await this.cartItemService.getCartItemById(cartItemId);
  }

  @Post('/create')
  async createCartItem(
    @Body('quantity') quantity: number,
    @Body('userId') userId: number,
    @Body('productId') productId: number
  ): Promise<CartItem> {    
    return this.cartItemService.createCartItem(quantity, userId, productId);
  }
}
