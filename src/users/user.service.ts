import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async findAll() {
    return await this.userRepository.find();
  }
  async findById(id) {
    return await this.userRepository.findOne({
      where: {
        id,
      },
    });
  }
  async create(data: CreateUserDto) {
    const user = new User();
    user.id = uuidv4();
    user.name = data.name;
    return await this.userRepository.save(user);
  }

  async updateUser(data: CreateUserDto, id: string) {
    const checkUser = await this.findById(id);
    if (!checkUser) {
      return `${id} not found`;
    } else {
      return await this.userRepository.save({ ...data, id: id });
    }
  }

  async deleteUser(id: string) {
    const checkUser = await this.findById(id);
    if (!checkUser) {
      return `${id} not found`;
    } else {
      return await this.userRepository.delete(id);
    }
  }
}
