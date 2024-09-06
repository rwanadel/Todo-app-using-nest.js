import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { userDot } from './dtos/user.dto';
import { updateUser } from './dtos/userUpdate.dto';

@Controller('/api/v1/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return `return user with ${id}`;
  }

  @Post()
  createUser(@Body() body: userDot) {
    console.log(body);

    return this.userService.create(body);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string,@Body() body:updateUser){
    return this.userService.update(id,body);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string){
    return this.userService.delete(id);
  }
}
