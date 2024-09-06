import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from 'src/entites/todo.entity';
import { Injectable, Inject, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class TodosService {
  constructor(
    @InjectModel(Todo.name) private todoModule: Model<Todo>,
    @Inject(REQUEST) private readonly req: Request,
  ) {}

  async getAllTodos() {
    return await this.todoModule.find().exec();
  }

  async create(todo: any) {
    const newTodo = await this.todoModule.create({
      ...todo,
      user: this.req['user'].userId,
    });
    return newTodo;
  }

  async update(todoId: string, updatedTodoData: any) {
    await this.todoModule.findByIdAndUpdate(todoId, updatedTodoData);

    return 'updated done';
  }
  async delete(todoId: string) {
    await this.todoModule.findByIdAndDelete(todoId);
    return 'todo deleted';
  }
}
