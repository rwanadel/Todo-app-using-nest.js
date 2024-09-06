

import { PartialType } from "@nestjs/mapped-types";
import { todoDot } from "./todo.dto";


export class updateTodo extends PartialType(todoDot){}