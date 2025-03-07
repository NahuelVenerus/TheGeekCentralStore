import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import User from '../models/user.model';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController]
})

export class UserModule {}
