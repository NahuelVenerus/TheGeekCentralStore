import { Controller } from '@nestjs/common';
import { ShoppingCartService } from 'src/services/shopping_cart.service';

@Controller('users')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}
  
}
