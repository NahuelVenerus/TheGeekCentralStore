import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import CartItem from 'src/models/cart_item.model';

@Injectable()
export class CartItemRepository{
  constructor(@InjectModel(CartItem) private cartItemModel: typeof CartItem) {}

  async create(cartItem: CartItem): Promise<CartItem> {
    return await this.cartItemModel.create(cartItem);
  }

  async findAll(): Promise<CartItem[]> {
    return await this.cartItemModel.findAll();
  }

  async findOne(id: number): Promise<CartItem | null> {
    return await this.cartItemModel.findByPk(id);
  }
}
