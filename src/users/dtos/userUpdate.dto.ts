

import { PartialType } from "@nestjs/mapped-types";
import { userDot } from "./user.dto";


export class updateUser extends PartialType(userDot){}