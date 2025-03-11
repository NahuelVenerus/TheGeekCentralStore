import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import ShoppingCart from 'src/models/shopping_cart.model';
import { ShoppingCartRepository } from 'src/repository/shopping-cart.repository';

@Injectable()
export class ShoppingCartService {
  constructor(private readonly shoppingCartRepository: ShoppingCartRepository) {}

  async getAllShoppingCarts(): Promise<ShoppingCart[]> {
    return await this.shoppingCartRepository.findAll();
  }
  
  async getShoppingCartByUserId(userId: number): Promise<ShoppingCart> {
    const foundShoppingCart = await this.shoppingCartRepository.findOne(userId);
    if(!foundShoppingCart) throw new NotFoundException("Shopping Cart doesn't exist");
    return foundShoppingCart;
  }
}
