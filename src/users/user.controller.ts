import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('find-all')
  async findAll() {
    return {
      data: await this.userService.findAll(),
    };
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return {
      data: await this.userService.findById(id),
    };
  }

  @Post()
  async create(@Body() data: CreateUserDto) {
    return {
      data: await this.userService.create(data),
    };
  }

  @Put(':id')
  async update(@Body() data: CreateUserDto, @Param('id') id: string) {
    return {
      data: await this.userService.updateUser(data, id),
    };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    await this.userService.deleteUser(id);
    return {
      data: 'OK',
    };
  }
}
