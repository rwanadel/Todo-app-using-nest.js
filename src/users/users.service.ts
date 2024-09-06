

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/entites/user.entity';
import { userDot } from './dtos/user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModule : Model<User>){}
 

    
    getAllUsers(){
       return this.userModule.find()
    }
    
    async create(createUserdot:userDot) {
        const newUser = await this.userModule.create(createUserdot);
        return newUser;
      }

    async update(userId: string, updatedUserData: any) {
       
        const updatedUser = await this.userModule.findByIdAndUpdate(userId, updatedUserData);
        
        return updatedUser;
      }
    async delete(userId: string){
      await this.userModule.findByIdAndDelete(userId);
      return "user deleted"
    }


    async findOneByEmail(value: string) {
      const user = await this.userModule.findOne({ email: value });
      return user;
    }
}
