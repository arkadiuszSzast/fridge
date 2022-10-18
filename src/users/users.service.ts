import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

import { RegisterRequest } from '../auth/registerRequest';
import User from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async register(registerRequest: RegisterRequest) {
    this.userRepository.insert({
      email: registerRequest.email,
      password: await bcrypt.hash(registerRequest.password, 10),
    });
  }
  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({ email: email });
  }
}
