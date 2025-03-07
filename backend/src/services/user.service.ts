import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import User from '../models/user.model';
import * as bcrypt from 'bcrypt';
import { UserDTO } from 'src/dtos/user.dto';
import { hashPassword } from 'src/utils/auth';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async createUser(userData: UserDTO): Promise<User> {
    const hashedPassword = await hashPassword(userData.password);
    const userToCreate: any = { ...userData, password: hashedPassword };
    const newUser = await this.userModel.create(userToCreate);
    return newUser;
  }

  async login({ email, password }): Promise<User> {
    const user = await this.userModel.findOne({ where: { email } });
    if (!user) throw new Error('User not found');    
    const passwordMatch = await bcrypt.compare(password, user.dataValues.password);
    if (!passwordMatch) throw new Error('Invalid password');
    return user;
  }
}
