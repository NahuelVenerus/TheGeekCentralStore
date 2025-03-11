import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import User from "src/models/user.model";

@Injectable()
export class UserRepository {
    constructor(@InjectModel(User) private userModel: typeof User) {}

    async findAll(): Promise<User[]> {
        return await this.userModel.findAll();
    }

    async findOne(email: string): Promise<User | null> {
        return await this.userModel.findOne({where: {email}})
    }

    async create(userData: User): Promise<User> {
        return await this.userModel.create(userData);
    }
}