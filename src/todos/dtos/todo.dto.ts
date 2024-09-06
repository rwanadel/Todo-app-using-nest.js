import { IsNotEmpty } from 'class-validator';

export class todoDot {
  @IsNotEmpty()
  todoName: string;

  @IsNotEmpty()
  important: boolean;
  @IsNotEmpty()
  duration: string;
}
