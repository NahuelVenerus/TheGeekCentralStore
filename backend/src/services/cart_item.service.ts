import { Injectable, NotFoundException } from '@nestjs/common';
import CartItem from 'src/models/cart_item.model';
import { CartItemRepository } from 'src/repository/cart-item.repository';

@Injectable()
export class CartItemService {
  constructor(private readonly cartItemRepository: CartItemRepository) {}
  
  async getAllCartItems(): Promise<CartItem[]> {
    return await this.cartItemRepository.findAll();
  }

  async getCartItemById(cartItemId: number): Promise<CartItem> {
    const foundCartItem = await this.cartItemRepository.findOne(cartItemId);
    if(!foundCartItem) throw new NotFoundException("Cart Item doesn't exist");
    return foundCartItem;
  }

  async createCartItem(quantity: number, userId: number, productId: number): Promise<CartItem> {;
    return await this.cartItemRepository.create({quantity, userId, productId} as CartItem);
  }

}
