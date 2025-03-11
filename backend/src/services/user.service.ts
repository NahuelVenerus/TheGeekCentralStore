import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import User from '../models/user.model';
import * as bcrypt from 'bcrypt';
import { UserDTO } from 'src/dtos/user.dto';
import { hashPassword } from 'src/utils/auth';
import { UserRepository } from 'src/repository/user.repository';
import { where } from 'sequelize';

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
    const existingUser: User | null = await this.userRepository.findOne(userData.email);
    if (existingUser) throw new ConflictException('User with that email address already exists');
  
    const hashedPassword = await hashPassword(userData.password);
    
    const newUser = await this.userRepository.create({ ...userData, password: hashedPassword } as User);
  
    return newUser;
  }
  
  

  async login({ email, password }): Promise<User> {
    const user = await this.userRepository.findOne(email);
    if (!user) throw new NotFoundException('User not found');    
    const passwordMatch = await bcrypt.compare(password, user.dataValues.password);
    if (!passwordMatch) throw new UnauthorizedException('Invalid password');
    return user;
  }
}
