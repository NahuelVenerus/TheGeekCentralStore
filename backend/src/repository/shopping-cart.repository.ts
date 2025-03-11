import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import ShoppingCart from "src/models/shopping_cart.model";

@Injectable()
export class ShoppingCartRepository {
  constructor(@InjectModel(ShoppingCart) private shoppingCartModel: typeof ShoppingCart) {}

  async create(category: ShoppingCart): Promise<ShoppingCart> {
    console.log("Entered repository");
    return await this.shoppingCartModel.create(category);
  }

  async findAll(): Promise<ShoppingCart[]> {
    return await this.shoppingCartModel.findAll();
  }

  async findOne(id: number): Promise<ShoppingCart | null> {
    return await this.shoppingCartModel.findByPk(id);
  }
}
    