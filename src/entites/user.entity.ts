import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Todo } from '../entites/todo.entity';

export type userDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  age: number;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' })
  todo: Todo;
}

export const userSchema = SchemaFactory.createForClass(User);
