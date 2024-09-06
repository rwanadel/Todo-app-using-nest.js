import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type userDocument = HydratedDocument<Todo>;

@Schema()
export class Todo {
  @Prop()
  todoName: string;

  @Prop()
  important: boolean;

  @Prop()
  duration: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: mongoose.Schema.Types.ObjectId;
}

export const todoSchema = SchemaFactory.createForClass(Todo);
