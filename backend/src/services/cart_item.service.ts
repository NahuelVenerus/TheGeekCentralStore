import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import CartItem from 'src/models/cart_item.model';

@Injectable()
export class CartItemService {
  constructor(@InjectModel(CartItem) private cartItemModel: typeof CartItem) {}
  
}
