import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signup(
    @Body('username') username: string,
    @Body('name') name: string,
    @Body('lastname') lastname: string,
    @Body('address') address: string,
    @Body('zip_code') zip_code: number,
    @Body('city') city: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('is_admin') is_admin: boolean
  ) {
    return await this.userService.createUser({ username, name, lastname, address, zip_code, city, email, password, is_admin });
  }
  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string
  ) {
    return await this.userService.login({ email, password });
  }
}
