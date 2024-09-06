import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { todoSchema } from 'src/entites/todo.entity';
import { TodosController } from './todos.controller';
import { Todo } from 'src/entites/todo.entity';
import { TodosService } from './todos.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: todoSchema }]),
  ],
  providers: [TodosService, JwtService],
  controllers: [TodosController],
})
export class TodosModule {}
