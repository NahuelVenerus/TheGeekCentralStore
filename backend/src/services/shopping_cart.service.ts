import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import ShoppingCart from 'src/models/shopping_cart.model';

@Injectable()
export class ShoppingCartService {
  constructor(@InjectModel(ShoppingCart) private shoppingCartModel: typeof ShoppingCart) {}

}
