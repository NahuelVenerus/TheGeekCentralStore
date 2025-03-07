import { Controller } from '@nestjs/common';
import { CartItemService } from 'src/services/cart_item.service';

@Controller('cart_items')
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}

}
