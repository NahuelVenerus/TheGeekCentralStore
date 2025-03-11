import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import User from '../models/user.model';
import * as bcrypt from 'bcrypt';
import { UserDTO } from 'src/dtos/user.dto';
import { hashPassword } from 'src/utils/auth';
import { UserRepository } from 'src/repository/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository){}

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne(email);
  }

  async createUser(userData: UserDTO): Promise<User> {
    const hashedPassword = await hashPassword(userData.password);
    const userToCreate: any = { ...userData, password: hashedPassword };    
    return await this.userRepository.create(userToCreate);
  }

  async login({ email, password }): Promise<User> {
    const user = await this.userRepository.findOne(email);
    if (!user) throw new NotFoundException('User not found');    
    const passwordMatch = await bcrypt.compare(password, user.dataValues.password);
    if (!passwordMatch) throw new UnauthorizedException('Invalid password');
    return user;
  }
}
