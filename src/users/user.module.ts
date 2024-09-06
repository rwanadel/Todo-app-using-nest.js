
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from 'src/entites/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    imports:[MongooseModule.forFeature([{ name: User.name, schema: userSchema }])],
    providers:[UsersService],
    controllers:[UsersController],
    // exports: ['USER_MODEL'],
    exports: [UsersService], 
})
export class UserModule {}
