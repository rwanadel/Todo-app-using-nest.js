
import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class userDot{
    @IsNotEmpty()

    username:string;


    @IsNotEmpty()

    age:number;
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @IsStrongPassword()
    password: string;
}