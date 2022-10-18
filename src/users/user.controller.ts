import { Body, Controller, Post } from '@nestjs/common';

import { RegisterRequest } from '../auth/registerRequest';
import { UsersService } from './users.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  register(@Body() req: RegisterRequest) {
    return this.userService.register(req);
  }
}
