import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { updateTodo } from './dtos/todoUpdate.dto';
import { todoDot } from './dtos/todo.dto';
import { AuthGuard } from 'src/gaurds/auth';

@Controller('/api/v1/todos')
export class TodosController {
  private service;
  constructor(private readonly todoService: TodosService) {}

  @Get()
  getAllTodos() {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  getTodo(@Param('id') id: string) {
    return `return todo with ${id}`;
  }

  @UseGuards(AuthGuard)
  @Post()
  createUser(@Body() body: todoDot) {
    console.log(body);

    return this.todoService.create(body);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() body: updateTodo) {
    return this.todoService.update(id, body);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.todoService.delete(id);
  }
}
